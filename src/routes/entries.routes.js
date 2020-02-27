const { Router } = require("express");
const router = Router();

const {
  renderIndex,
  renderNewEntry,
  createNewEntry
} = require("../controllers/entries.controller");

router.get("/", renderIndex);

router.get("/new-entry", renderNewEntry);

router.post("/new-entry", createNewEntry);

module.exports = router;
