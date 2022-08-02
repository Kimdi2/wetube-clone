import express from "express";

const PORT = 4000;

const app = express();

// application 설정
// app = express()로 application 만듦
// listen(PORT, handleListening) 으로 외부 접속 시작(listen)
// 그 사이에 application값 설정!!

const gossipMiddleware = (req, res, next) => {
  console.log(`Someone is going to: ${req.url}`);
  next();
};

const handleHome = (req, res) => {
  return res.send("<h1>I'm still wating you</h1>");
};

app.get("/", gossipMiddleware, handleHome);

const handleListening = () =>
  console.log(`✅✅ Sever listening on port http://localhost:${PORT} ✅✅`);

app.listen(PORT, handleListening);
