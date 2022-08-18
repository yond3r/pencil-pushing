// const router = require('express').Router;

// const store = require('../db/store');

//trying call-backs instead because I cannot figure out my original issue to save my life?
// router.get('/notes', (req, res) =>{
//     store
//         .getNotes()
//         .then(notes=> {
//             res.json(notes)
//         }).catch(err =>{
//             res.status(500).json(err)
//         })
// });

//posting
// router.post('/notes', (req, res) =>{
//     store
//         .addNotes(req.body)
//         .then(notes=> {
//             res.json(notes)
//         }).catch(err =>{
//             res.status(500).json(err)
//         })
// });

//deleting
// router.delete('/notes/:id', (req, res) => {
//     store
//         .removeNote(req.params.id)
//         .then(() => res.json({ok:true}))
//         .catch(err => res.status(500).json(err))
// })

// module.exports= router;

