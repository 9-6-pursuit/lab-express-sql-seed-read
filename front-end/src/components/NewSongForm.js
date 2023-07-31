/** @format */

import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./NewSongForm.css";

const NewSongForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		artist: "",
		album: "",
		time: "",
		is_favorite: false,
	});
	const navigate = useNavigate();

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		axios
			.post(process.env.REACT_APP_API_URL + "/songs", formData)
			.then((res) => {
				navigate(`/songs`);
			})
			.catch((reason) => {
				console.log("An error occurred", reason);
			});
	};

	return (
		<div className="container songs-form">
			<div className="action-index">
				<h2>
					<span className="page-title">New Song</span>
				</h2>
				<Link to="/songs" className="page-button">
					Back
				</Link>
			</div>
			<form className="new-song-form" onSubmit={handleSubmit}>
				<label htmlFor="name">Song Name:</label>
				<input
					id="name"
					type="text"
					name="name"
					value={formData.name}
					onChange={handleChange}
					required
				/>
				<label htmlFor="artist">Artist:</label>
				<input
					id="artist"
					type="text"
					name="artist"
					value={formData.artist}
					onChange={handleChange}
					required
				/>
				<label htmlFor="album">Album:</label>
				<input
					id="album"
					type="text"
					name="album"
					value={formData.album}
					onChange={handleChange}
					required
				/>
				<label htmlFor="time">Time:</label>
				<input
					id="time"
					type="text"
					name="time"
					value={formData.time}
					onChange={handleChange}
					required
				/>
				<label htmlFor="is_favorite">Is Favorite:</label>
				<input
					id="is_favorite"
					type="checkbox"
					name="is_favorite"
					checked={formData.is_favorite}
					onChange={(event) =>
						setFormData({
							...formData,
							is_favorite: event.target.checked,
						})
					}
				/>
				<button className="page-button" type="submit">
					Create Song
				</button>
			</form>
		</div>
	);
};

export default NewSongForm;
