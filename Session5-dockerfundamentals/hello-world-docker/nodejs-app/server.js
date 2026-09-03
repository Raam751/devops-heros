const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello world from Node.js app running in Docker container!');
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})