/** @format */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome";
import MainLayout from "./layouts/MainLayout";
import SongsIndex from "./components/SongsIndex";
import NewSongForm from "./components/NewSongForm";
import EditSongForm from "./components/EditSongForm";
import SongDetails from "./components/SongDetails";

function App() {
	return (
		<BrowserRouter>
			<MainLayout>
				<Routes>
					<Route path="/" element={<Welcome />}></Route>
					<Route
						path="/songs"
						element={<SongsIndex></SongsIndex>}></Route>
						<Route
							path="/songs/:id"
							element={<SongDetails></SongDetails>}></Route>
					<Route
						path="/songs/new"
						element={<NewSongForm></NewSongForm>}></Route>
					<Route path="/songs/edit/:id" element={<EditSongForm />} />
				</Routes>
			</MainLayout>
		</BrowserRouter>
	);
}

export default App;
