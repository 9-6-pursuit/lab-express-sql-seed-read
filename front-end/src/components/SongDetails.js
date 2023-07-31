/** @format */

import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./SongDetails.css";

const SongDetails = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const [song, setSong] = useState(null);

	useEffect(() => {
		axios
			.get(process.env.REACT_APP_API_URL + `/songs/${id}`)
			.then((res) => {
				setSong(res.data);
			})
			.catch((reason) => {
				console.log("An error occurred", reason);
			});
	}, [id]);

	const handleEdit = () => {
		navigate(`/songs/edit/${id}`);
	};

	const handleDelete = () => {
		axios
			.delete(process.env.REACT_APP_API_URL + `/songs/${id}`)
			.then((res) => {
				navigate("/songs");
			})
			.catch((reason) => {
				console.log("An error occurred", reason);
			});
	};

	if (!song) {
		return (
			<div className="container song-details">
				<div class="spinner"></div>
			</div>
		);
	}

	return (
		<div className="container Song-Details">
			<h2 className="page-title">Song Details</h2>
			<div className="details Songs">
				<p>
					<strong>Name:</strong> {song.name}
				</p>
				<p>
					<strong>Artist:</strong> {song.artist}
				</p>
				<p>
					<strong>Album:</strong> {song.album}
				</p>
				<p>
					<strong>Time:</strong> {song.time}
				</p>
				{song.is_favorite ? "⭐️ Is Favorite" : ""}
			</div>
			<div className="action-buttons">
				<button className="page-button" onClick={handleEdit}>
					Edit
				</button>
				<button className="page-button" onClick={handleDelete}>
					Delete
				</button>
				<Link to="/songs" className="page-button">
					Back
				</Link>
			</div>
		</div>
	);
};

export default SongDetails;
