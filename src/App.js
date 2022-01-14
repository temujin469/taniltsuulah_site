import {Footer, Navbar} from "./components"
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Contact from "./pages/About/About";
import About from "./pages/Contact/Contact";

function App() {
  return (
    <Router>
      <GlobalStyle/>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
