import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./Sass/style.scss";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className='app'>
        <Nav />
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;