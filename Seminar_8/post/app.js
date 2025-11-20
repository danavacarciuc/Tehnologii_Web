const express = require("express");
const Book = require("./book");

const app = express();
const port = 3000;

app.use(express.json());

let books = [
  new Book(1, "Dune", "sf", "Frank Herbert"),
  new Book(2, "Robinson Crusoe", "adventure", "Daniel Defoe"),
  new Book(3, "Foundation", "sf", "Asimov"),
];

app.get("/api/books/sorted", (req, res) => {
  const sorted = [...books].sort((a, b) => a.name.localeCompare(b.name));
  res.json(sorted);
});

app.post("/api/books", (req, res) => {
  const { id, name, genre, author } = req.body;

  if (!id || !name || !genre || !author) {
    return res.status(400).json({ error: "All fields are required." });
  }

  if (typeof id !== "number") {
    return res.status(400).json({ error: "ID must be a number." });
  }

  if (books.some((b) => b.id === id)) {
    return res.status(400).json({ error: "ID already exists." });
  }

  const book = new Book(id, name, genre, author);
  books.push(book);
  res.status(201).json(book);
});

app.listen(port, () => {
  console.log("Running on port " + port);
});
