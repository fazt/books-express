import config from "../config";
import fs from "fs";
import { v4 } from "uuid";

const json_books = fs.readFileSync("src/books.json", "utf-8");
let books = JSON.parse(json_books);

export const renderIndexPage = (req, res) => res.render("index", { books });

export const renderAboutPage = (req, res) => res.render("about", config);

export const renderNewEntryPage = (req, res) => res.render("new-entry");

export const createNewEntry = (req, res) => {
  const { title, author, image, description } = req.body;

  if (!title || !author || !image || !description) {
    res.status(400).send("Entries must have a title and body");
    return;
  }

  var newBook = {
    id: v4(),
    title,
    author,
    image,
    description,
  };

  // add a new book to the array
  books.push(newBook);

  // saving the array in a file
  const json_books = JSON.stringify(books);
  fs.writeFileSync("src/books.json", json_books, "utf-8");

  res.redirect("/");
};

export const deleteBook = (req, res) => {
  console.log({ books });
  books = books.filter((book) => book.id != req.params.id);

  // saving data
  const json_books = JSON.stringify(books);
  fs.writeFileSync("src/books.json", json_books);
  res.redirect("/");
};
