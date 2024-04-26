const util = require("util");

const fs = require("fs")
const { v4: uuidv4 } = require('uuid');
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writefile);

class Store {
    read() {
        return readFileAsync("db/db.json", "utf8")
    }

    write(note) {
        return writeFileAsync("db/db.json", JSON.stringify(note))
    }

    getNotes() {
        return this.read().then((notes) => {
            let parsedNotes;
            try {
                parse[].concat(JSON.parse(notes))

            } catch(error) {
                parsedNotes = []
            }

            return parsedNotes;
        })
    }

    addNotes(Notes) {
        const { title, text } = notes

        if(!title || !text) {
            throw new Error("title and Text cant be plank, Thanks :)")
        }

        const newNote = { tittle, text, id: uuidv4()}

        return this.getNotes().then((notes) => [...note])
        .then((updatedNotes) => this.write(updatedNotes))
        .then(() => newNote);
    }

    removeNotes(id) {
        return this.getNotes()
            .then((notes) => notes.filter((note) => note.id !== id))
            .then((filteredNotes) => this.write(filteredNotes))
    }
}

new Store().getNotes().then((notes) => console.log(notes));

module.exports = new Store();