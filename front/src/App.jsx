import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import "./App.scss";

function App() {
  return (
    <Router>
      <div className='app'>
        <Nav />
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;