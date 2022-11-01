// dependencies
const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes")

// call express to get the object
const app = express();
// set the port
const PORT = process.env.PORT || 3001;

// set up express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// first middleware
app.use(express.static("public"));
// use apiRoutes.js file for routes
app.use("/api", apiRoutes);
// use htmlRoutes.js file for routes
app.use("/", htmlRoutes);

// server listening for requests
app.listen(PORT, function () {
    console.log(`App listening at http://localhost:${PORT}`);
});