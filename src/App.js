// import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
// import About from "./components/About";
// import Navbar from "./components/Navbar";
import FooterBar from "./components/FooterBar";
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/about" element={<About/>}/> */}
        <Route path="/contact" element={<ContactUs/>}/>
        {/* <Route path="/*" element={<Home/>}/> */}
        {/* <Route path="/gallery" element ={<Gallery/>}/> */}
      </Routes>
      <FooterBar/>
    </div>
  );
}
export default App;
