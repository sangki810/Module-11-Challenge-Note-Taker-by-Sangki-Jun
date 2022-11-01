// constructors
const express = require("express");
const path = require("path");
const fs = require("fs");

// call express to get the object
const app = express();
// set the port
const PORT = process.env.PORT || 3001;

// first middleware
app.use(express.static("public"));

// routes
app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "public/notes.html"));
});

// displays the notes
app.get("/aapi/notes", function (req, res) {
    fs.readFile("db/db.json", "utf8", function (err, data) {
        if (err) {
            console.log(err);
            return;
        }
        res.json(notes);
    });
});

app.listen(PORT, function () {
    console.log(`App listening at http://localhost:${PORT}`);
});