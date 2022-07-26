// Declare constant require, brings express library into code
const express = require('express');

//Declare constant variable app, creates express function
const app = express();

//Using the get method on the app variable.
app.get("/", (req, res) => { //Callback function takes two arguments, req and res.
    res.send("Hello World"); //res returns a respnse of "Hello World"
});

//Creating local server with .listen
app.listen(3000, () => { //Callback function takes one argument, port number that you wish to listen to.
    console.log("Server is running on port 3000"); //Logs to console that server is running on port 3000
});
