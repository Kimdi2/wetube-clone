import express from "express";
import morgan from "morgan";
import session from "express-session";
import MongoStore from "connect-mongo";

import globalRouter from "./routers/rootRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import { localsMiddleware } from "./middleware";

const app = express();
//log setting and execute
const logger = morgan("dev");
app.use(logger);

// application 설정
// app = express()로 application 만듦
// listen(PORT, handleListening) 으로 외부 접속 시작(listen)
// 그 사이에 application값 설정!!
app.set("view engine", "pug");
// changing views default directory
app.set("views", process.cwd() + "/src/views");

app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "Hello",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: "mongodb://127.0.0.1:27017/wetube" }),
  })
);

// router
app.use(localsMiddleware);
app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

app.get("/protected", (req, res) => res.send("<h1>Protected</h1>"));

export default app;
