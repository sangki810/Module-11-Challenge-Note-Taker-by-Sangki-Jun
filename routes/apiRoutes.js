// dependencies
const apiRouter = require("express").Router();
const { readFromFile, readAndAppend, uuid } = require("./../db/store");
const fs = require("fs")

// route to get notes
apiRouter.get("/notes", (req, res) => {
    console.info(`${req.method} request received for notes`);
    readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

// post routes for new notes
apiRouter.post("/notes", (req, res) => {
    console.info(`${req.method} request recieved to submit notes`);
    let newNote = req.body;
    newNote.id = uuid();
    readAndAppend(newNote, "./db/db.json");
    res.send("new note has been added"); 
});

// deletes notes
apiRouter.delete("/notes/:id", function (req, res) {
    fs.readFile("./db/db.json", (err, data) => {
        if(err) throw err
        let currentNotes = JSON.parse(data)
        for(i=0; i< currentNotes.length; i++) {
            if(currentNotes[i].id == req.params.id) {
                currentNotes.splice(i, 1)
            }
        }
        fs.writeFile("./db/db.json", JSON.stringify(currentNotes), (err) => {
            if(err) throw err;
            res.send("deleted succesfully")
        })
    })
});

module.exports = apiRouter;