const express = require('express');
const app = express();
const port = 3050;

app.use(express.json());

const indexsRouter = require("./routes/index.js");
app.use("/api", indexsRouter);

app.listen(port, () => {
  console.log(port, '포트로 서버가 열렸어요!');
});