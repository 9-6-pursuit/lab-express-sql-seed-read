/** @format */

import { Link } from "react-router-dom";
import "./MainLayout.css";

const MainLayout = (props) => {
	return (
		<>
			<div className="structure">
				<header>
					<Link to="/songs">Tuner</Link>
				</header>

				<nav>
					<ul>
						<li className="links">
							<Link to="/songs">Songs</Link>
						</li>
					</ul>
				</nav>

				<main>{props.children}</main>

				<aside>aside</aside>

				<footer>footer</footer>
			</div>
		</>
	);
};

export default MainLayout;
