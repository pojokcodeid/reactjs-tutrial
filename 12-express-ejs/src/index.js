require("dotenv").config();
const PORT = process.env.PORT || 4000;
const base_url = process.env.BASE_URL;

const express = require("express");
const router = require("./routes");
const logProcess = require("./middleware/log");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");
const app = express();

// gunakan ejs
app.set("views", path.join(__dirname, "../src/views"));
app.set("view engine", "ejs");
// middleware pihak ketiga
app.use(expressLayouts);

// bildin middleware static file
app.use(express.static("public"));
// set urlencode
app.use(express.urlencoded({ extended: true }));
app.use(logProcess); //ini middleware
app.use(router);

app.use("*", (req, res) => {
  const data = {
    title: "Error",
    layout: "layout/main-layout",
    base_url,
  };
  res.render("404", data);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}/`);
});
