import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { usersprisma } from '../utils/prisma/usersIndex.js';

const router = express.Router();

// 회원가입 API
router.post('/sign-up', async (req, res, next) => {
  try {
    const { idname, password, passwordConfirm, name } = req.body;

    const isExistUser = await usersprisma.users.findFirst({
      where: {
        idname,
      },
    });

    if (isExistUser) {
      return res.status(400).json({ message: '이미 존재하는 아이디입니다.' });
    }

    const vaildIdname = /^[a-z0-9]+$/;
    if (!vaildIdname.test(idname)) {
      return res
        .status(400)
        .json({ message: '아이디는 영어 소문자와 숫자만 사용할 수 있습니다.' });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: '비밀번호는 최소 6자 이상이어야 합니다.' });
    }

    if (password !== passwordConfirm) {
      return res
        .status(400)
        .json({ message: '비밀번호와 비밀번호 확인이 일치하지 않습니다.' });
    }


    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await usersprisma.users.create({
      data: {
        idname,
        password: hashedPassword,
        name,
      },
    });

    return res.status(201).json({ message: '회원가입이 완료되었습니다.' });
  } catch (err) {
    next(err);
  }
});

// 모든 유저 조회 API
router.get('/users', async (req, res, next) => {
  try {
    const users = await usersprisma.users.findMany({
      select: {
        idname: true,
        name: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    return res.status(200).json(users);
  } catch (err) {
    next(err);
  }
});

// 로그인 API
router.post('/sign-in', async (req, res, next) => {
  try {
    const { idname, password } = req.body;
    const user = await usersprisma.users.findFirst({
      where: {
        idname,
      },
    });

    if (!user)
      return res.status(401).json({ message: '존재하지 않는 아이디입니다.' });
    else if (!(await bcrypt.compare(password, user.password)))
      return res.status(401).json({ message: '비밀번호가 일치하지 않습니다.' });

    const accessToken = jwt.sign(
      { userId: user.userId },
      process.env.JWT_SECRET_KEY,
      { expiresIn: '1h' }
    );

    res.setHeader('authorization', `Bearer ${accessToken}`);
    return res.status(200).json({ message: '로그인 성공' });
  } catch (error) {
    next(error);
  }
});

export default router;
