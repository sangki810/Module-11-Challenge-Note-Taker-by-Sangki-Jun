// dependencies
const apiRouter = require("express").Router();
const { readFromFile, readAndAppend, uuid } = require("./../db/store");
const fs = require("fs")

// route to get notes
apiRouter.get("/notes", (req, res) => {
    console.info(`${req.method} request received for notes`);
    //read from db.json file, json.parse the data
    readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

// post routes for new notes
apiRouter.post("/notes", (req, res) => {
    console.info(`${req.method} request recieved to submit notes`);
    // new note as a variable holding user input
    let newNote = req.body;
    // id of new note is from random id generator in store.js
    newNote.id = uuid();
    // new note pushed into array in db.json
    readAndAppend(newNote, "./db/db.json");
    res.send("new note has been added"); 
});

// deletes notes
apiRouter.delete("/notes/:id", function (req, res) {
    // reads db.json file
    fs.readFile("./db/db.json", (err, data) => {
        if(err) throw err
        // the current array state held inside variable
        let currentNotes = JSON.parse(data)
        // for loop to check very notes inside db.json file
        for(i=0; i< currentNotes.length; i++) {
            // if the id of the deleted note matches id of note in db.json file
            if(currentNotes[i].id == req.params.id) {
                // remove the notes
                currentNotes.splice(i, 1)
            }
        }
        // re-write the db.json file without the deleted notes
        fs.writeFile("./db/db.json", JSON.stringify(currentNotes), (err) => {
            if(err) throw err;
            res.send("deleted succesfully")
        })
    })
});

// exports for other files
module.exports = apiRouter;