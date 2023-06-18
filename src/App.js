import { 
  Routes, 
  Route, 
  useLocation 
} from "react-router-dom";

// import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import { AnimatePresence } from "framer-motion";
// import Nav from "./components/Nav";

function App() {
  const location = useLocation()
  return (
    <div className="font-lexend-deca">
        {/* <Nav /> */}
        <AnimatePresence initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </AnimatePresence>
    </div>
  );
}

export default App;
