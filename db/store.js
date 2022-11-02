// dependencies
const express = requrie("express");
const path = require("path");
const util = require("util");
const fs = require("fs");
const app = express();

const asyncReadFile = util.promisify(fs.readFile);
const asyncWriteFile = util.promisify(fs.writeFile);

class store {
    constructor() {
        this.lastId = 0
    };
    read() {
        return asyncReadFile(path.join(__dirname, "db.json"), "utf8");
    };
    write(note) {
        return asyncWriteFile(path.join(__dirname, "db.json"), JSON.stringify(note));
    };
    getNotes() {
        return this.read().then(notes => {
            let parsedNotes = JSON.parse(notes);
            return parsedNotes;
        });
    };
    addNote(newNote) {
        return this.getNotes().then(notes => {
            const newNoteList = [...notes, newNote];
            return this.write(newNoteList);
        });
    };
    deleteNotes(title) {
        return this.getNotes()
            .then(notes => {
                console.log("This note says " + title);
                for (var i = 0; i < notes.length; i++) {
                    if (notes[i].title === title) {
                        notes.splice(i, 1);
                        break;
                    };
                };
                this.write(notes);
            });
    };
};

const store = new Store();

module.exports = store;

