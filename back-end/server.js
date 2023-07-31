/** @format */

// DEPENDENCIES
const app = require("./app.js");

// CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
	res.send("Welcome to the tuner app");
});

// 404 Route
app.use((req, res, next) => {
	res.status(404).send("404 Page Not Found");
});

// Start the server
app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
