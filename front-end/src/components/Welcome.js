/** @format */

import { Link } from "react-router-dom";
import "./Welcome.css";

const Welcome = () => {
	return (
		<div className="container welcome">
			<h1>Welcome to the Frontend</h1>
			<p>Thank you for visiting us! We hope you enjoy the experience.</p>
			<Link to="/songs" className="page-button">
				Continue
			</Link>
		</div>
	);
};

export default Welcome;
