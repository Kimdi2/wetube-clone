import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();
const logger = morgan("dev");

// application 설정
// app = express()로 application 만듦
// listen(PORT, handleListening) 으로 외부 접속 시작(listen)
// 그 사이에 application값 설정!!

const handleHome = (req, res) => {
  return res.send("<h1>I'm still wating you</h1>");
};

app.use(logger);
app.get("/", handleHome);

const handleListening = () =>
  console.log(`✅✅ Sever listening on port http://localhost:${PORT} ✅✅`);

app.listen(PORT, handleListening);
