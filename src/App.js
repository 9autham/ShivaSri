// import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import About from "./components/About";
import Gallery from "./components/Gallery";
import FooterBar from "./components/FooterBar";
import Navbar from './components/Navbar'
import Pravalika from './components/pravalika'
import Smruthika from './components/smruthika'
import PreWedding from './components/prewed'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/gallery" element ={<Gallery/>}/>
        <Route path="/pravalika" element ={<Pravalika/>}/>
        <Route path="/smruthika" element ={<Smruthika/>}/>
        <Route path="/prewedding" element ={<PreWedding/>}/>
      </Routes>
      <FooterBar/>
    </div>
  );
}
export default App;
