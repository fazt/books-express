import config from "../config.js";
import { v4 } from "uuid";
import { addItem, deleteItem, readData } from "../libs/jsonDb.js";

export const renderIndexPage = (req, res) => {
  const books = readData("books.json");
  console.log(books);
  res.render("index", { books });
};

export const renderAboutPage = (req, res) => res.render("about", config);

export const renderNewEntryPage = (req, res) => res.render("new-entry");

export const createNewEntry = (req, res) => {
  const { title, author, image, description } = req.body;

  if (!title || !author || !image || !description) {
    return res.status(400).send("Entries must have a title and body");
  }

  var newBook = {
    id: v4(),
    title,
    author,
    image,
    description,
  };

  // saving the array in a file
  addItem(newBook);

  res.redirect("/");
};

export const deleteBook = (req, res) => {
  console.log(req.params.id);
  deleteItem(req.params.id);
  res.redirect("/");
};
