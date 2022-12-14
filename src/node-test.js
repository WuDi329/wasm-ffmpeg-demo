const express = require('express')
const app = express()
const port = 3000

// Add headers
app.use(function (req, res, next) {


    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');

    res.header("Cross-Origin-Embedder-Policy", "require-corp");
    res.header("Cross-Origin-Opener-Policy", "same-origin");

    // Pass to next layer of middleware
    next();
});

app.use(express.static('public'));

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

app.get('wasm', (req, res) => {
    res.send
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})