const express = require("express");
const apiRoutes = require("./routes/apiRoutes.js");
const htmlRoutes = require("./routes/htmlRoutes.js")

// call express to get the object
const app = express();
// set the port
const PORT = process.env.PORT || 3001;

// set up express to handle data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// first middleware
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);


app.listen(PORT, function () {
    console.log(`App listening at http://localhost:${PORT}`);
});