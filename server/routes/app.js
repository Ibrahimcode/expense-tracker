var express = require("express");
var router = express.Router();
path = require("path");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.sendFile(path.join(__dirname, "dist/expense-tracker/index.html"));
});

module.exports = router;
