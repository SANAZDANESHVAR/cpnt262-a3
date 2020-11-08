
// Importing Modules- assigning  variables
const express = require('express');
const path = require('path');
require('dotenv').config();

//Create an express server
const app = express();

//  file-Middleware in order to load static
app.use(express.static(path.join(__dirname, 'public')));

// error message-404 File not found
app.use(function (req, res, next) {
    res.status(404);
    res.send('404: File Not Found');
});

const PORT = process.env.PORT || 3000;

// Start server
app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`);
});