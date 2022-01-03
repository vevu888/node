const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>my app</h1>');
});

app.listen(5000, () => {
    console.log('app aude on port 5000');
});