module.exports = function (app) {
  var entries = [];

  app.locals.entries = entries;
  
  app.get('/', (req, res) => {
    res.render('index');
  });

  app.get('/new-entry', (req, res) => {
    res.render('new-entry');
  });

  app.post('/new-entry', (req, res) => {
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

    res.redirect('/');
  });

  return app;
}
