// dependencies
const apiRouter = require("express").Router();
const { readFromFile, readAndAppend } = require("./../db/store");

// route to get notes
apiRouter.get("/api/notes", function (req, res) {
    readFromFile.then(notes => res.json(notes))
        .catch(err => res.status(500).json(err))
});

// post the notes to page
apiRouter.post("/api/notes", function (req, res) {
    store
        .addNote(req.title, req.body)
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err))
});

// deletes notes
apiRouter.delete("/api/notes/:id", function (req, res) {
    store  
        .deleteNotes(req.id)
        .then(() => res.json({ ok: true }))
        .catch(err => res.status(500).json(err))
});
 
app.use("/", router);

module.exports = router;