const express = require("express");
const app = express();
const port = "3000";
const dotenv = require("dotenv").config();
const connectionString = process.env.CONNECT_STRING;
const {add, subtract} = require("./helpers/math"); 
console.log(subtract(90, 12));
const {result) = require("./helpers/loggers/result")
console.log(result())

app.get("/", (req, res) => {
	res.send("");                                                   
});

app.get("/about", (req, res) => {
	res.send('');
});

app.get("/contact", (req, res) => {
	res.send('');
});

app.get("/home", (req, res) => {
	res.send('');
});

app.listen(port, ()	=> {
	console.log(`Server is running on port ${port}`);
});

const mongoose = require("mongoose")
	.connect(connectionString)
	.then(() => console.log("Connected to MongoDB"))
	.catch((err) => console.log(err));
