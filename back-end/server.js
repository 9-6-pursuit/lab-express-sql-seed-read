// DEPENDENCIES
const app = require("./app.js");

// CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT;

// LISTEN
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});


// app.listen(PORT, (error) =>{
// 	if(!error)
// 		console.log("Server is Successfully Running, and App is listening on port "+ PORT)
// 	else
// 		console.log("Error occurred, server can't start", error);
// 	}
// );

