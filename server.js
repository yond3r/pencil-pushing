const PORT = process.env.PORT || 3001;
const fs = require('fs');
const path = require('path');
const { v4:uuid } = require('uuid');
const express = require('express');

const app = express();

const theNotes = ('./db/db.json');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


app.get('/api/notes', (req, res) => {
    res.json(theNotes.slice(1));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

function noteCreation(body, notesArray) {
    const newNote = body;
    if (!Array.isArray(notesArray))
        notesArray = [];

    if (notesArray.length === 0)
        notesArray.push(0);

    body.id = notesArray[0];
    notesArray[0]++;

    notesArray.push(newNote);
    fs.writeFile(
        path.join(__dirname, './db/db.json'),
        JSON.stringify(notesArray, null, 2));
            return newNote
};


app.post('api/notes/:id', (req, res) => {
    fs.readFile('./db/db.json', (err, data) => {
        if (err) {
            throw err;
        } else {
            const newNote = noteCreation(req.body.id = uuid(), theNotes);
            res.json(newNote)

        }
    })
});

function noteDeletion(id, notesArray) {
    for (let i = 0; i < notesArray.length; i++) {
        let note = notesArray[i];

        if (note.id === id) {
            notesArray.splice(i, 1);
            fs.writeFile(
                path.join(__dirname, './db/db.json'),
                JSON.stringify(notesArray, null, 2)
            )
            break;
        }
    }
};

app.delete('/api/notes/:id', (req, res) => {
    noteDeletion(req.params.id, theNotes);
    res.json(true);
});


app.listen(PORT, () => {
    console.log(`API server is now port on ${PORT}`);
});
