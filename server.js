const express = require("express");
const router = require("express").Router();
const store = require("../db/store");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"))


const store = require("./db/store");
app.get("/api/notes", (req, res) => {
    store.getNotes().then((notes) => {
        return res.status(200).json(notes)
    }).catch((error) => res.status(500).json(error))
})

app.post("/api/notes", (req, res) => {
    store.addNotes(req.body).then((note) => {
        return res.status(200).json(note)
    }).catch((error) => res.status(500).json(error))
})

app.delete("/api/notes/:id", (req,res) => {
    store.removeNotes(req.params.id).then(() => {
        res.status(200).json({ delete : true, id: req.params.id})
    }).catch((error) => res.status(500).json(error))
})

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "..public/notes.html"))
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..public/index.html"))
})


app.listen(PORT, () => {
    console.log(`server is ran on htp://localhost:${PORT}`)
})