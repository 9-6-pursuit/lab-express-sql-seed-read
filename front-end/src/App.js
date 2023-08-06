//DEPENDENCIES
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

//PAGES
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import New from "./Pages/New";
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour"


// COMPONENTS
import Aside from "./Components/Aside";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import NavSideBar from "./Components/NavSideBar";

function App() {

  return (
    <div className="wrapper">
      <Router>
      <Header />
        <NavSideBar />
        <main>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/songs" element={<Index/>}/>
            <Route path="/songs/:id" element={<Show/>}/>
            <Route path="/songs/:id/Edit" element={<Edit/>}/>
            <Route path="/songs/new" element={<New/>}/>
            <Route path="/*" element={<FourOFour/>}/>
          </Routes>
        </main>
        <Aside />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
