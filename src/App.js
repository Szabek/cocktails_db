import './App.scss';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
//pages
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
//components
import SingleCocktail from "./pages/SingleCocktail";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/coctail/:id" element={<SingleCocktail/>}/>
          <Route path="*" element={<Error/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
