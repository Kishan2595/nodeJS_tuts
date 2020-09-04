const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.send('<h1>Homepage</h1>');
    res.end();
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server up on port ${PORT}`));