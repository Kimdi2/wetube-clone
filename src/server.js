import express from "express";

const PORT = 4000;

const app = express();

// application 설정
// app = express()로 application 만듦
// listen(PORT, handleListening) 으로 외부 접속 시작(listen)
// 그 사이에 application값 설정!!

const handleHome = (req, res) => {
  return res.send("I'm still wating you");
};

const handleLogin = (req, res) => {
  return res.send("Login Here");
};

app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () =>
  console.log(`✅✅ Sever listening on port http://localhost:${PORT} ✅✅`);

app.listen(PORT, handleListening);
