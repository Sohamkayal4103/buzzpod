import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Podcasts from "./pages/Podcasts/Podcasts";
import AddPodcast from "./pages/AddPodcast/AddPodcast";
import './App.css';

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/podcasts" element={<Podcasts />} />
        <Route path="/add" element={<AddPodcast />} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
