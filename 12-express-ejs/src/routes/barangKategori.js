const kategoriRouter = require("express").Router();

kategoriRouter.get("/", (req, res) => {
  const data = {
    title: "Error",
    layout: "layout/main-layout",
  };
  res.render("kategori", data);
});

module.exports = kategoriRouter;
