let entries = [];

const renderIndex = (req, res) => {
  res.render("index", {entries});
};

const renderNewEntry = (req, res) => {
  res.render("new-entry");
};

const createNewEntry = (req, res) => {
  if (!req.body.title || !req.body.body) {
    res.status(400).send("Entries must have a title and body");
    return;
  }

  var myNewEntry = {
    title: req.body.title,
    content: req.body.body,
    published: new Date()
  };

  entries.push(myNewEntry);

  res.redirect("/");
};

module.exports = {
  renderIndex,
  renderNewEntry,
  createNewEntry  
};