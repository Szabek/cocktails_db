import './App.scss';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
//pages
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import Statistics from "./pages/Statistics";
//components
import SingleCocktail from "./pages/SingleCocktail";
import Footer from "./components/Footer";
import LoginAdmin from "./components/adminPanel/LoginAdmin";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/statistics" element={<Statistics/>}/>
          <Route exact path="/cocktail/:id" element={<SingleCocktail/>}/>
          <Route exact path="/admin/login" element={<LoginAdmin/>}/>
          <Route path="*" element={<Error/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
