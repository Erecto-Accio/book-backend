const express = require("express");
const router = express.Router();

//  Getting all the adventure books
router.get("/", (req, res) => {
  res.status(200).json({
    message: "Giving all the adventure book",
  });
});


module.exports = router;
