const express = require("express");
const app = express();
const port = 3000;

require("dotenv").config();

const mongoose = require("mongoose");
const connectionString = process.env.CONNECT_STRING;

const { add, subtract } = require("./helpers/math");
console.log(subtract(90, 12));

const { result } = require("./helpers/loggers/result");
console.log(result());

app.get("/", (req, res) => {
    res.send("This is your Main Page");
});

app.get("/about", (req, res) => {
    res.send("This is your About Page");
});

app.get("/contact", (req, res) => {
    res.send("This is your Contact Page");
});

app.get("/home", (req, res) => {
    res.send("This is your Home Page");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

mongoose
    .connect(connectionString)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));