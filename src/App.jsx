
import Navbar from "./components/Navbar";

import Home from "./components/pages/Home";
import Harticles from "./components/pages/Harticles";
import About from "./components/pages/Bout";



import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="">
      <Navbar/>
      <Routes>
        <Route path="/Home" exact element={<Home />} />
        <Route path="/Harticles" exact element={<Harticles />} />
        <Route path="/About" exact element={<About />} />
       
      </Routes>
   
    </div>
  );
}

export default App;