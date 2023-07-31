/** @format */

let db = require("../db/dbConfig.js");

async function getAllSongs(order, is_favorite) {
	try {
		let query = "SELECT * FROM songs";
		if (is_favorite !== undefined) {
			query += ` WHERE is_favorite = ${is_favorite}`;
		}
		if (order === "asc" || order === "desc") {
			query += ` ORDER BY name ${order.toUpperCase()}`;
		}
		let result = await db.manyOrNone(query);
		return result;
	} catch (error) {
		throw error;
	}
}

async function getSongById(id) {
	try {
		let query = await db.oneOrNone("SELECT * FROM songs WHERE id = $1", id);
		return query;
	} catch (error) {
		throw error;
	}
}

async function createSong(name, artist, album, time, is_favorite) {
	try {
		let query = await db.one(
			"INSERT INTO songs (name, artist, album, time, is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *",
			[name, artist, album, time, is_favorite]
		);
		return query;
	} catch (error) {
		throw error;
	}
}

async function deleteSong(id) {
	try {
		let query = await db.one(
			"DELETE FROM songs WHERE id = $1 RETURNING *",
			id
		);
		return query;
	} catch (error) {
		throw error;
	}
}

async function updateSong(id, name, artist, album, time, is_favorite) {
	try {
		let query = await db.oneOrNone(
			"UPDATE songs SET name = $1, artist = $2, album = $3, time = $4, is_favorite = $5 WHERE id = $6 RETURNING *",
			[name, artist, album, time, is_favorite, id]
		);
		return query;
	} catch (error) {
		throw error;
	}
}

module.exports = {
	getAllSongs,
	getSongById,
	createSong,
	deleteSong,
	updateSong,
};
