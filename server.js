// //dependencies + variable ports
// const express = require('express');
// const app = express();

// const PORT = process.env.PORT || 3001;

// app.use(express.urlencoded({ extended:true }));
// app.use(express.json());
// app.use(express.static('public'));

// // routes
// require('./routes/apiRoutes');
// require('./routes/htmlRoutes');

// //app listener to start server!
// app.listen(PORT, () => {
//     console.log(`API server is now port on ${PORT}`);
// });

const fs = require('fs');
const express = require('express');

const app = express();
const path = require('path');

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended:true }));
app.use(express.json());
app.use(express.static('public'));

app.get('api/notes', (req, res)=>{
    const newNote = {
        title: req.body.title,
        text: req.body.text
    }

    let notes = JSON.parse(fs.readFileSync("./db/db.json"));
    notes.push(newNote);
    fs.writeFileSync('./db/db.json', JSON.stringify(notes, null, 2));
        res.json(notes);
});

app.delete('/api/notes/:id', (req, res) => {
    noteDeletion(req.params.id, newNote);
    res.json(true);
});

    app.get('*', (req, res) =>{
       res.sendFile(path.join(__dirname, '..public/index.html'))
})

app.listen(PORT, () => {
    console.log(`API server is now port on ${PORT}`)});