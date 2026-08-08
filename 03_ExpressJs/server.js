// Server using expressjs in common js
const express = require('express')
const port = 3000;

const app = express();

app.get('/', (req, res) => {
    res.send('Hello expressjs!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)

}) 