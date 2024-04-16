// Dependencies
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Schema
const Book = require("../models/bookModel");
//  Getting all the adventure books
router.get("/", (req, res) => {
  Book.find()
    .exec()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});

// Posting all the adventure books
router.post("/", (req, res) => {
  const book = new Book({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    author: req.body.author,
    pageNumber: req.body.pageNumber,
    review: req.body.review,
    price: req.body.price,
    category: req.body.category,
  });
  book
    .save()
    .then((data) => {
      res.status(200).json({
        book: data,
        message: "Book posted successfully",
      });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// Getting a adventure book by id
router.get("/:bookId", (req, res) => {
  const id = req.params.bookId;
  Book.findById(id)
    .exec()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});

// Patching a book with id
router.patch("/:bookId", (req, res) => {
  const id = req.params.bookId;
  const updatedBook = req.body;
  const allowedKeys = [
    "title",
    "author",
    "pageNumber",
    "review",
    "price",
    "category",
  ];

  const checkValid = Object.keys(updatedBook).every((update) =>
    allowedKeys.includes(update)
  );

  if (!checkValid) {
    res.status(400).json({
      message: "Invalid updates",
    });
  } else {
    Book.updateOne({ _id: id }, { $set: updatedBook })
      .exec()
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  }
});

// Deleting a book with id
router.delete("/:bookId", (req, res) => {
  res.status(200).json({
    message: "Deleted the book successfully",
  });
});

module.exports = router;
