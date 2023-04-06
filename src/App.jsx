import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home"
import Favs from "./pages/Favs"
import Contact from "./pages/Contact"
import Detail from "./pages/Detail"
import { useGlobalStates } from "./Components/utils/Context";



function App() {

  const {theme} = useGlobalStates()
  return (
      <div className="App" id={theme.background}>
          <Navbar/>

           <Routes>
              <Route path="/Favs" element={<Favs/>}/>
              <Route path="/Contact" element={<Contact/>}/>
              <Route path="/" element={<Home/>}/>
              <Route path="/:id" element={<Detail/>}/>
           </Routes>

          <Footer/>
      </div>
  );
}

export default App;
