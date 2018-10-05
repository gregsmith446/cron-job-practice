// bring in express and body parser
const express = require('express');
const bodyParser = require('body-parser');

// call express whenever we use 'app' in code
const app = express();

// require the express API routes from main.js
// don't need to specify main.js, main works fine
const main = require('./routes/api/main');

// tell the server how to use the body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use the set environment variable for PORT if it exists(is true), if false, use 5000
const port = process.env.PORT || 5000;

// req ALWAYS first! can't be a response without a request to respond to!
// when going to route directory, display this code
app.get('/', (req, res) => {
    res.send("Hola Me Llamo Dora")
});

// tells to use the router at API/main
app.use("/api/main", main);

// below code is interchangeable, these 3 versions are the same (ES6 with backticks, then 2 ways to print) 
app.listen(port, () => console.log(`Server running on port ${port}`));
// app.listen(port, () => console.log('server running on port', port))
// app.listen(port, () => console.log('server running on port ' + port))






