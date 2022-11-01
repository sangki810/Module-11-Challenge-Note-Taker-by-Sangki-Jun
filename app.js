// constructors
const express = require("express");
const path = require("path");
const fs = require("fs");

// call express to get the object
const app = express();
// set the port
const PORT = process.env.PORT || 3001;

// first middleware
app.use(express.static("public"));