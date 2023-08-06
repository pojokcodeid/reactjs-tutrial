require("dotenv").config();
const PORT = process.env.PORT || 4000;

const express = require("express");
const app = express();
const logProcess = require("./middleware/log");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");
const router = require("./routes");

// declare global variable
app.use(function (req, res, next) {
  global.base_url = process.env.BASE_URL;
  next();
});
// gunakan ejs
app.set("views", path.join(__dirname, "../src/views"));
app.set("view engine", "ejs");
app.use(expressLayouts);

// built in middleware static file
app.use(express.static("public"));
// set urlencode untuk post data
app.use(express.urlencoded({ extended: true }));
app.use(logProcess); //ini middleware
// router
app.use(router);

app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}/`);
});
