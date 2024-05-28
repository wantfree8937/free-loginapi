import express from 'express';
import { itemsprisma } from '../utils/prisma/itemsIndex.js';

const router = express.Router();

// 아이템 생성 API
router.post('/items', async (req, res, next) => {
  try {
    const { itemCode, itemName, itemPrice, health, power } = req.body;

    const itemcode = await itemsprisma.items.findFirst({
      where: {
        itemCode: +itemCode,
      },
    });
    if (itemcode) {
      return res
        .status(400)
        .json({ message: '이미 존재하는 아이템코드입니다.' });
    }

    const newItem = await itemsprisma.items.create({
      data: {
        itemCode,
        itemName,
        itemPrice,
        ItemStat: {
          create: {
            health,
            power,
          },
        },
      },
      include: {
        ItemStat: true,
      },
    });

    res.status(201).json({ data: newItem });
  } catch (error) {
    next(error);
  }
});

// 아이템 수정 API
router.patch('/items/:itemCode', async (req, res, next) => {
  try {
    const { itemName, health, power } = req.body;
    const { itemCode } = req.params;

    const item = await itemsprisma.items.findFirst({
      where: {
        itemCode: +itemCode,
      },
    });

    if (!item) {
      return res.status(404).json({ message: '아이템을 찾을 수 없습니다.' });
    }

    const updatedItem = await itemsprisma.items.update({
      where: {
        itemCode: +itemCode,
      },
      data: {
        itemName,
        ItemStat: {
          update: {
            health,
            power,
          },
        },
      },
    });

    res.status(200).json({ data: updatedItem });
  } catch (error) {
    next(error);
  }
});

// 아이템 목록 조회 API
router.get('/items', async (req, res, next) => {
  try {
    const item = await itemsprisma.items.findMany({
      select: {
        itemCode: true,
        itemName: true,
        itemPrice: true,
      },
      orderBy: {
        itemCode: 'asc',
      },
    });

    return res.status(200).json(item);
  } catch (error) {
    next(error);
  }
});

// 아이템 상세 조회 API
router.get('/items/:itemCode', async (req, res, next) => {
  try {
    const { itemCode } = req.params;

    const item = await itemsprisma.items.findFirst({
      where: {
        itemCode: +itemCode,
      },
    });

    if (!item) {
      return res.status(404).json({ message: '아이템을 찾을 수 없습니다.' });
    }

    const detailItem = await itemsprisma.items.findFirst({
      where: {
        itemCode: +itemCode,
      },
      select: {
        itemCode: true,
        itemName: true,
        itemPrice: true,
        ItemStat: {
          select: {
            health: true,
            power: true,
          },
        },
      },
    });

    return res.status(200).json(detailItem);
  } catch (error) {
    next(error);
  }
});

// // 아이템 삭제 API
// router.delete('/items/:itemCode', async (req, res, next) => {
//   try {
//     const { itemCode } = req.params;

//     const item = await itemsprisma.items.findFirst({
//       where: {
//         itemCode: +itemCode,
//       },
//     });

//     if (!item) {
//       return res
//         .status(404)
//         .json({ message: '해당 아이템을 찾을 수 없습니다.' });
//     }

//     await itemsprisma.items.delete({
//       where: {
//         itemId: item.itemId,
//       },
//     });

//     res.status(204).end();
//   } catch (error) {
//     next(error);
//   }
// });

export default router;
