const logProcess = (req, res, next) => {
  console.log("terdapat request ke PATH : " + req.path);
  next();
};

module.exports = logProcess;
