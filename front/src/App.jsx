import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Donate } from "./pages/Donate";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer";
import "./App.scss";

function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/donate" element={<Donate />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
