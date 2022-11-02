// dependencies
const path = require("path");
const express = require("express");
const app = express();
const router = express.Router();

// gets notes.html
router.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});
// gets index.html
router.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// exports for other files
exports.router1 = router;
