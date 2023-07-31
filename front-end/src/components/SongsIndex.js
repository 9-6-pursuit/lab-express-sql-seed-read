/** @format */

import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./SongsIndex.css";

const SongsIndex = () => {
	const [songs, setSongs] = useState([]);
	const navigate = useNavigate();

	function goEdit(id) {
		navigate("/songs/" + id);
	}

	useEffect(() => {
		axios
			.get(process.env.REACT_APP_API_URL + "/songs")
			.then((res) => {
				setSongs(res.data);
			})
			.catch((reason) => {
				console.log("An error occurred");
			});
	}, []);
	return (
		<div className="container songs-index">
			<div className="action-index">
				<h2>
					<span className="page-title">Index</span>
				</h2>
				<Link to="/songs/new" className="page-button">
					New Song
				</Link>
			</div>
			<div className="table-container">
				<table className="table Songs">
					<thead>
						<tr>
							<th>Fav</th>
							<th>Song</th>
							<th>Artist</th>
							<th>Time</th>
						</tr>
					</thead>
					<tbody>
						{songs.map((song) => (
							<tr className="Song"
								key={song.id}
								onClick={() => {
									goEdit(song.id);
								}}>
								<td>{song.is_favorite ? "⭐️" : ""}</td>
								<td>{song.name}</td>
								<td>{song.artist}</td>
								<td>{song.time}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default SongsIndex;
