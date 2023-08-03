const express = require("express");
const router = require("./routes");

const app = express();
const port = 3000;
app.use(express.json());
app.use(router);

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
  // res.send("Hello World - express");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
