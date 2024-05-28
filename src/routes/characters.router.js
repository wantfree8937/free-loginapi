import express from 'express';
import jwt from 'jsonwebtoken';
import { usersprisma } from '../utils/prisma/usersIndex.js';
import { itemsprisma } from '../utils/prisma/itemsIndex.js';
import authMiddleware from '../middlewares/auth.middleware.js';

const router = express.Router();

// 캐릭터 생성 API
router.post('/characters', authMiddleware, async (req, res, next) => {
  try {
    const { name } = req.body;
    const { userId } = req.user;

    const Character = await usersprisma.characters.findFirst({
      where: {
        name: name,
      },
    });
    if (Character) {
      return res.status(400).json({ message: '이미 존재하는 닉네임입니다.' });
    }

    const newCharacter = await usersprisma.characters.create({
      data: {
        UserId: userId,
        name: name,
      },
    });
    console.log(newCharacter);
    return res.status(201).json({ characterId: newCharacter.characterId });
  } catch (error) {
    next(error);
  }
});

// 캐릭터 삭제 API
router.delete('/characters/:name', authMiddleware, async (req, res, next) => {
  try {
    const { name } = req.params;
    const { userId } = req.user;

    const character = await usersprisma.characters.findFirst({
      where: {
        name: name,
        UserId: userId,
      },
    });

    if (!character) {
      return res
        .status(404)
        .json({ message: '캐릭터가 존재하지 않거나, 권한이 없습니다.' });
    }

    await usersprisma.characters.delete({
      where: {
        name: name,
      },
    });

    return res
      .status(200)
      .json({ message: '캐릭터가 성공적으로 삭제되었습니다.' });
  } catch (error) {
    next(error);
  }
});

// 캐릭터 상세 조회 API
router.get('/characters/:name', async (req, res, next) => {
  try {
    const { name } = req.params;
    const authorization = req.headers.authorization;

    // 로그인하지 않은 경우
    if (!authorization) {
      const character = await usersprisma.characters.findFirst({
        where: {
          name: name,
        },
      });

      if (!character) {
        return res.status(404).json({ message: '캐릭터를 찾을 수 없습니다.' });
      }

      return res.status(200).json({
        name: character.name,
        health: character.health,
        power: character.power,
      });
    }

    // 로그인 한 경우
    const [tokenType, token] = authorization.split(' ');

    if (tokenType !== 'Bearer') {
      return res
        .status(401)
        .json({ message: '토큰 타입이 일치하지 않습니다.' });
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userId = decodedToken.userId;

    const character = await usersprisma.characters.findFirst({
      where: {
        name: name,
      },
    });

    if (!character) {
      return res.status(404).json({ message: '캐릭터를 찾을 수 없습니다.' });
    }

    // 내 캐릭터 조회
    if (character.UserId === userId) {
      return res.status(200).json({
        name: character.name,
        health: character.health,
        power: character.power,
        money: character.money,
      });
    } else {
      // 다른 유저가 조회
      return res.status(200).json({
        name: character.name,
        health: character.health,
        power: character.power,
      });
    }
  } catch (error) {
    switch (error.name) {
      case 'TokenExpiredError':
        return res.status(401).json({ message: '토큰이 만료되었습니다.' });
      case 'JsonWebTokenError':
        return res.status(401).json({ message: '토큰이 조작되었습니다.' });
      default:
        return res
          .status(401)
          .json({ message: error.message ?? '비정상적인 요청입니다.' });
    }
  }
});

// 아이템 구매 API
router.patch(
  '/characters/:name/buyItem',
  authMiddleware,
  async (req, res, next) => {
    try {
      const itemPurchase = req.body;
      const { name } = req.params;
      const { userId } = req.user;

      const character = await usersprisma.characters.findFirst({
        where: {
          name: name,
          UserId: userId,
        },
      });

      if (!character) {
        return res
          .status(404)
          .json({ message: '캐릭터가 존재하지 않거나, 권한이 없습니다.' });
      }

      let totalPrice = 0;

      for (const { itemCode, count } of itemPurchase) {
        const item = await itemsprisma.items.findFirst({
          where: {
            itemCode: +itemCode,
          },
        });

        if (!item) {
          return res
            .status(404)
            .json({ message: '존재하지 않는 아이템입니다.' });
        }

        totalPrice += item.itemPrice * count;
      }

      if (character.money < totalPrice) {
        return res.status(403).json({
          message: '골드가 부족합니다.',
        });
      }

      await usersprisma.$transaction(async (tx) => {
        await tx.characters.update({
          where: {
            characterId: character.characterId,
          },
          data: {
            money: character.money - totalPrice,
          },
        });

        for (const { itemCode, count } of itemPurchase) {
          const inventoryItem = await tx.characterInven.findFirst({
            where: {
              CharacterId: character.characterId,
              ItemCode: +itemCode,
            },
          });

          if (inventoryItem) {
            // 인벤토리에 아이템이 존재하는 경우
            await tx.characterInven.update({
              where: {
                inventoryId: inventoryItem.inventoryId,
              },
              data: {
                count: inventoryItem.count + count,
              },
            });
          } else {
            // 인벤토리에 아이템이 존재하지 않는 경우
            await tx.characterInven.create({
              data: {
                CharacterId: character.characterId,
                Name: character.name,
                ItemCode: +itemCode,
                count: count,
              },
            });
          }
        }
      });

      const updatedCharacter = await usersprisma.characters.findFirst({
        where: {
          characterId: character.characterId,
        },
        include: {
          CharacterInven: true,
        },
      });

      res.status(200).json({
        message: '아이템을 구입했습니다.',
        data: updatedCharacter,
      });
    } catch (error) {
      next(error);
    }
  }
);

// 아이템 판매 API
router.patch(
  '/characters/:name/sellItem',
  authMiddleware,
  async (req, res, next) => {
    try {
      const itemSale = req.body;
      const { name } = req.params;
      const { userId } = req.user;

      const character = await usersprisma.characters.findFirst({
        where: {
          name: name,
          UserId: userId,
        },
      });

      if (!character) {
        return res
          .status(404)
          .json({ message: '캐릭터가 존재하지 않거나, 권한이 없습니다.' });
      }

      let totalPrice = 0;

      for (const { itemCode, count } of itemSale) {
        const inventoryItem = await usersprisma.characterInven.findFirst({
          where: {
            CharacterId: character.characterId,
            ItemCode: +itemCode,
          },
        });

        if (!inventoryItem) {
          return res
            .status(404)
            .json({ message: '인벤토리에 아이템이 부족합니다.' });
        }

        if (inventoryItem.count < count) {
          return res
            .status(404)
            .json({ message: '인벤토리에 아이템이 존재하지 않습니다.' });
        }

        const item = await itemsprisma.items.findFirst({
          where: {
            itemCode: +itemCode,
          },
        });

        if (!item) {
          return res
            .status(404)
            .json({ message: '존재하지 않는 아이템입니다.' });
        }

        totalPrice += Math.round(item.itemPrice * count * 0.6);
      }

      await usersprisma.$transaction(async (tx) => {
        await tx.characters.update({
          where: {
            characterId: character.characterId,
          },
          data: {
            money: character.money + totalPrice,
          },
        });

        for (const { itemCode, count } of itemSale) {
          const inventoryItem = await tx.characterInven.findFirst({
            where: {
              CharacterId: character.characterId,
              ItemCode: +itemCode,
            },
          });

          if (inventoryItem.count === count) {
            // 인벤토리에서 아이템 전부 제거
            await tx.characterInven.delete({
              where: {
                inventoryId: inventoryItem.inventoryId,
              },
            });
          } else {
            // 인벤토리에서 아이템 수 감소
            await tx.characterInven.update({
              where: {
                inventoryId: inventoryItem.inventoryId,
              },
              data: {
                count: inventoryItem.count - count,
              },
            });
          }
        }
      });

      const updatedCharacter = await usersprisma.characters.findFirst({
        where: {
          characterId: character.characterId,
        },
        include: {
          CharacterInven: true,
        },
      });

      res.status(200).json({
        message: '아이템을 판매했습니다.',
        data: updatedCharacter,
      });
    } catch (error) {
      next(error);
    }
  }
);

// 인벤토리 목록 조회 API
router.get(
  '/characters/:name/inventory',
  authMiddleware,
  async (req, res, next) => {
    try {
      const { name } = req.params;
      const { userId } = req.user;

      const character = await usersprisma.characters.findFirst({
        where: {
          name: name,
          UserId: userId,
        },
      });

      if (!character) {
        return res
          .status(404)
          .json({ message: '캐릭터가 존재하지 않거나, 권한이 없습니다.' });
      }

      const inventoryItem = await usersprisma.characterInven.findMany({
        where: {
          CharacterId: character.characterId,
        },
      });

      const response = [];

      for (const itemname of inventoryItem) {
        const item = await itemsprisma.items.findFirst({
          where: {
            itemCode: itemname.ItemCode,
          },
        });

        response.push({
          ItemCode: item.itemCode,
          itemName: item.itemName,
          count: itemname.count,
        });
      }

      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }
);

// 아이템 장착 API
router.patch(
  '/characters/:name/equip',
  authMiddleware,
  async (req, res, next) => {
    try {
      const { name } = req.params;
      const { itemCode } = req.body;
      const { userId } = req.user;

      const character = await usersprisma.characters.findFirst({
        where: {
          name: name,
          UserId: userId,
        },
      });

      if (!character) {
        return res
          .status(404)
          .json({ message: '캐릭터가 존재하지 않거나, 권한이 없습니다.' });
      }

      const inventoryItem = await usersprisma.characterInven.findFirst({
        where: {
          CharacterId: character.characterId,
          ItemCode: +itemCode,
        },
      });

      if (!inventoryItem) {
        return res
          .status(404)
          .json({ message: '인벤토리에 아이템이 존재하지 않습니다.' });
      }

      const equippedItem = await usersprisma.equippedItems.findFirst({
        where: {
          CharacterId: character.characterId,
          ItemCode: +itemCode,
        },
      });

      if (equippedItem) {
        return res.status(400).json({ message: '이미 장착된 아이템입니다.' });
      }

      const itemStat = await itemsprisma.itemStat.findFirst({
        where: {
          ItemCode: +itemCode,
        },
      });

      await usersprisma.$transaction(async (tx) => {
        await tx.characters.update({
          where: {
            characterId: character.characterId,
          },
          data: {
            health: character.health + itemStat.health,
            power: character.power + itemStat.power,
          },
        });

        await tx.equippedItems.create({
          data: {
            CharacterId: character.characterId,
            Name: inventoryItem.Name,
            ItemCode: +itemCode,
          },
        });

        if (inventoryItem.count === 1) {
          await tx.characterInven.delete({
            where: {
              inventoryId: inventoryItem.inventoryId,
            },
          });
        } else {
          await tx.characterInven.update({
            where: {
              inventoryId: inventoryItem.inventoryId,
            },
            data: {
              count: inventoryItem.count - 1,
            },
          });
        }
      });

      const updatedCharacter = await usersprisma.characters.findFirst({
        where: {
          characterId: character.characterId,
        },
        select: {
          name: true,
          health: true,
          power: true,
        },
      });

      const item = await itemsprisma.items.findFirst({
        where: {
          itemCode: +itemCode,
        },
      });

      res.status(200).json({
        message: `${item.itemName}을(를) 장착하였습니다.`,
        data: updatedCharacter,
      });
    } catch (error) {
      next(error);
    }
  }
);

// 아이템 탈착 API
router.patch(
  '/characters/:name/unequip',
  authMiddleware,
  async (req, res, next) => {
    try {
      const { name } = req.params;
      const { itemCode } = req.body;
      const { userId } = req.user;

      const character = await usersprisma.characters.findFirst({
        where: {
          name: name,
          UserId: userId,
        },
      });

      if (!character) {
        return res
          .status(404)
          .json({ message: '캐릭터가 존재하지 않거나, 권한이 없습니다.' });
      }

      const equippedItem = await usersprisma.equippedItems.findFirst({
        where: {
          CharacterId: character.characterId,
          ItemCode: +itemCode,
        },
      });

      if (!equippedItem) {
        return res
          .status(404)
          .json({ message: '장착되지 않은 아이템 입니다.' });
      }

      const inventoryItem = await usersprisma.characterInven.findFirst({
        where: {
          CharacterId: character.characterId,
          ItemCode: +itemCode,
        },
      });

      const itemStat = await itemsprisma.itemStat.findFirst({
        where: {
          ItemCode: +itemCode,
        },
      });

      await usersprisma.$transaction(async (tx) => {
        await tx.characters.update({
          where: {
            characterId: character.characterId,
          },
          data: {
            health: character.health - itemStat.health,
            power: character.power - itemStat.power,
          },
        });

        // 장착한 아이템 삭제
        await tx.equippedItems.delete({
          where: {
            equippedItemId: equippedItem.equippedItemId,
          },
        });

        if (!inventoryItem) {
          await tx.characterInven.create({
            data: {
              CharacterId: character.characterId,
              Name: character.name,
              ItemCode: +itemCode,
              count: 1,
            },
          });
        } else {
          await tx.characterInven.update({
            where: {
              inventoryId: inventoryItem.inventoryId,
            },
            data: {
              count: inventoryItem.count + 1,
            },
          });
        }
      });

      const updatedCharacter = await usersprisma.characters.findFirst({
        where: {
          characterId: character.characterId,
        },
        select: {
          name: true,
          health: true,
          power: true,
        },
      });

      const item = await itemsprisma.items.findFirst({
        where: {
          itemCode: +itemCode,
        },
      });

      res.status(200).json({
        message: `${item.itemName}을(를) 탈착하였습니다.`,
        data: updatedCharacter,
      });
    } catch (error) {
      next(error);
    }
  }
);

// 장착한 아이템 조회 API
router.get('/characters/:name/equip', async (req, res, next) => {
  try {
    const { name } = req.params;

    const character = await usersprisma.characters.findFirst({
      where: {
        name: name,
      },
    });

    if (!character) {
      return res.status(404).json({ message: '캐릭터가 존재하지 않습니다.' });
    }

    const equippedItem = await usersprisma.equippedItems.findMany({
      where: {
        CharacterId: character.characterId,
      },
    });

    const response = [];

    for (const itemname of equippedItem) {
      const item = await itemsprisma.items.findFirst({
        where: {
          itemCode: itemname.ItemCode,
        },
      });

      response.push({
        ItemCode: item.itemCode,
        itemName: item.itemName,
      });
    }

    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
});

// 게임머니 파밍 API
router.patch(
  '/characters/:name/farming',
  authMiddleware,
  async (req, res, next) => {
    try {
      const { name } = req.params;
      const { userId } = req.user;

      const character = await usersprisma.characters.findFirst({
        where: {
          name: name,
          UserId: userId,
        },
      });

      if (!character) {
        return res
          .status(404)
          .json({ message: '캐릭터가 존재하지 않거나, 권한이 없습니다.' });
      }

      const characterUpdate = await usersprisma.characters.update({
        where: {
          characterId: character.characterId,
        },
        data: {
          money: character.money + 1000,
        },
      });

      res.status(200).json({ data: characterUpdate });
    } catch (error) {
      next(error);
    }
  }
);

export default router;
