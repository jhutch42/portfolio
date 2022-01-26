// server.js
const express = require('express');

// Define Express App
const app = express();

const PORT = process.env.PORT || 8081;

app.use(express.static('./src/public'));
app.listen(PORT, () => {
    console.log('Server connected at:', PORT);
});