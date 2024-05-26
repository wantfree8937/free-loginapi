import express from 'express';
import cookieParser from "cookie-parser";
import dotEnv from "dotenv";
import LogMiddleware from "./middlewares/log.middleware.js";
import ErrorHandlingMiddleware from "./middlewares/error-handling.middleware.js";
import UsersRouter from "./routes/users.router.js";
import CharactersRouter from "./routes/characters.router.js";

// .env 파일을 읽어서 process.env에 추가합니다.
dotEnv.config();

const app = express();
const PORT = 3020;

app.use(LogMiddleware);
app.use(express.json());
app.use(cookieParser());
app.use("/api", [UsersRouter, CharactersRouter]);
app.use(ErrorHandlingMiddleware);

app.listen(PORT, () => {
  console.log(PORT, '포트로 서버가 열렸어요!');
});