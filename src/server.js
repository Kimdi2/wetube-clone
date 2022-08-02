import express from "express";

const PORT = 4000;

const app = express();

// application 설정
// app = express()로 application 만듦
// listen(PORT, handleListening) 으로 외부 접속 시작(listen)
// 그 사이에 application값 설정!!

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

const privateMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    return res.send("<h1>Not Allowed</h1>");
  } else {
    console.log("Allowed, you may continue");
    next();
  }
};

const handleHome = (req, res) => {
  return res.send("<h1>I'm still wating you</h1>");
};

app.use(logger);
app.use(privateMiddleware);
app.get("/", handleHome);

const handleListening = () =>
  console.log(`✅✅ Sever listening on port http://localhost:${PORT} ✅✅`);

app.listen(PORT, handleListening);
