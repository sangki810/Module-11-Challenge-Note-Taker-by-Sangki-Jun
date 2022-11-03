// dependencies
const htmlRouter = require("express").Router();
const path = require("path")

// gets notes.html
htmlRouter.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});
// gets index.html
htmlRouter.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// exports for other files
module.exports = htmlRouter;
