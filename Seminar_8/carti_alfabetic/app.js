const express = require("express");
const Book = require("./book");

const app = express();
const port = 3000;

let books = [
  new Book(1, "Dune", "sf", "Frank Herbert"),
  new Book(2, "Robinson Crusoe", "adventure", "Daniel Defoe"),
  new Book(3, "Foundation", "sf", "Asimov"),
];

app.get("/api/books/sorted", (req, res) => {
  const sortedBooks = [...books].sort((a, b) => a.name.localeCompare(b.name));
  res.json(sortedBooks);
});

app.listen(port, () => {
  console.log("Running on port " + port);
});
