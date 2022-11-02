// dependencies
const apiRouter = require("express").Router();
const { readFromFile, readAndAppend, uuid } = require("./../db/store");

// route to get notes
apiRouter.get("/api/notes", (req, res) => {
    console.info(`${req.method} request received for notes`);
    readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

// post routes for new notes
apiRouter.post("/api/notes", (req, res) => {
    console.info(`${req.method} request recieved to submit notes`);
    
});

// deletes notes
apiRouter.delete("/api/notes/:id", function (req, res) {
    store  
        .deleteNotes(req.id)
        .then(() => res.json({ ok: true }))
        .catch(err => res.status(500).json(err))
});

module.exports = apiRouter;