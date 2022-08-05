const PORT = process.env.PORT || 3001;

const express = require('express');

const app = express();

app.use(express.urlencoded({ extended:true }));
app.use(express.json());
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`API server is now port on ${PORT}`);
});