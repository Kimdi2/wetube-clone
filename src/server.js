import express from "express";
import morgan from "morgan";

import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 4000;

const app = express();
//log setting and execute
const logger = morgan("dev");
app.use(logger);

// application 설정
// app = express()로 application 만듦
// listen(PORT, handleListening) 으로 외부 접속 시작(listen)
// 그 사이에 application값 설정!!
const URLLogger = (req, res, next) => {
  console.log(`Path: ${req.path}`);
  next();
};
const timeLogger = (req, res, next) => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  console.log(`Time: ${year}.${month}.${date}`);
  next();
};
const securityLogger = (req, res, next) => {
  if (req.protocol === "http") {
    console.log("Insecure");
  } else {
    console.log("Secure");
  }
  next();
};
const protectorMiddleware = (req, res, next) => {
  if (req.path === "/protected") {
    return res.send("Forbidden");
  }
  next();
};

app.use(URLLogger, timeLogger, securityLogger, protectorMiddleware);

// router
app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

app.get("/protected", (req, res) => res.send("<h1>Protected</h1>"));

const handleListening = () =>
  console.log(`✅✅ Sever listening on port http://localhost:${PORT} ✅✅`);

app.listen(PORT, handleListening);
