// dependencies
const router = require("express").Router();
const store = require("./../db/store")

// route to get notes
router.get("/notes", function (req, res) {
    store
        .getNotes()
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err))
});

// post the notes to page
router.post("/notes", function (req, res) {
    store
        .addNote(req.body)
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err))
});

// deletes title
router.delete("/notes/:title", function (req, res) {
    store  
        .deleteNotes(req.title)
        .then(() => res.json({ ok: true }))
        .catch(err => res.status(500).json(err))
});
 
module.exports = router;