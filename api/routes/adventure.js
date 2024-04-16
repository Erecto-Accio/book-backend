// Dependencies
const express = require("express");
const router = express.Router();

//  Getting all the adventure books
router.get("/", (req, res) => {
  res.status(200).json({
    message: "Giving all the adventure book",
  });
});

// Posting all the adventure books
router.post("/", (req, res) => {
  res.status(202).json({
    message: "Posting all the adventure book",
  });
});

// Getting a adventure book by id
router.get("/:bookId", (req, res) => {
  const id = req.params.bookId;
  res.status(200).json({
    message: "A book with id",
    bookId: id,
  });
});

// Patching a book with id
router.patch("/:bookId", (req, res) => {
  res.status(200).json({
    message: "Patched the book successfully",
  });
});

// Deleting a book with id
router.delete("/:bookId", (req, res) => {
  res.status(200).json({
    message: "Deleted the book successfully",
  });
});

module.exports = router;
