// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./Components/NavBar";

import Index from "./Pages/Index";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/songs" element={<Index />} />
          </Routes>{" "}
        </main>
      </Router>
    </div>
  );
}

export default App;
