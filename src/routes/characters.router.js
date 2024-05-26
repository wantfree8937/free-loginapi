import express from 'express';
import { usersprisma } from '../utils/prisma/usersIndex.js';
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

    return res.status(201).json({ characterId: newCharacter.characterId });
  } catch (error) {
    next(error);
  }
});

// 캐릭터 조회 API
router.get('/characters', authMiddleware, async (req, res, next) => {
  try {
    const userId = req.user.userId;

    const userCharacters = await usersprisma.characters.findMany({
      where: {
        UserId: userId,
      },
    });

    return res.status(200).json({ data: userCharacters });
  } catch (error) {
    next(error);
  }
});

export default router;
