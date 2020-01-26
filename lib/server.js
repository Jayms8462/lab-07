'use strict'
const express = require('express');
const app = express();

app.get('/food', (req, res) => {
    console.log('Food route was accepted');
    res.status(200).send('Food');
})
app.get('/food/:id', (req, res) => {
    console.log(req.headers);
    console.log(req.path);
    console.log(req.query);
    console.log(req.params);
    console.log(req.body);
})

module.exports = {
    start: (port) => {
        app.listen(port, () => console.log("I am listening"));
    }
};