//--------------\\ IMPORTS //--------------\\

const express = require("express");
const app = express();

//---------------\\ OTHERS //--------------\\

const PORT = 3000;

//-------------\\ FUNCTIONS //-------------\\

// Setting site's view engine to ejs
app.set("view engine", "ejs");

app.get("/", (req, res) => {
	res.render("index");
});

// Connecting to express server
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}. Connect to http://localhost:${PORT}`);
});
