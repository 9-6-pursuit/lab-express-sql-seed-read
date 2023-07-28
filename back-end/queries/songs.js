/** @format */

let db = require("../db/dbConfig.js");

async function getAllSongs() {
	try {
		let query = await db.manyOrNone("select * from songs");
		return query;
	} catch (error) {
		return error;
	}
}


module.exports={
    getAllSongs
}