import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav/Nav";
import "./App.scss";
import Questionnaire1 from "./pages/Questionnaire1";

function App() {
  return (
    <> 
    <Router>
      <div className='app'>
        <Nav />
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
      </div>
    </Router>
    
    </>);
}

export default App;