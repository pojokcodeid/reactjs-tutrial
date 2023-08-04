require("dotenv").config();
const PORT = process.env.PORT || 4000;

const express = require("express");
const router = require("./routes");
const logProcess = require("./middleware/log");

const app = express();
app.use(express.json());
app.use(logProcess); //ini middleware

app.use(router);

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
  // res.send("Hello World - express");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
