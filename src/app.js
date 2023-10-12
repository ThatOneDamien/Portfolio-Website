require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT ? 
            parseInt(process.env.PORT) : 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../public/index.html'));
});

app.get('*', (req, res) => {
    res.status(404).send('Cannot GET ' + req.url);
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});