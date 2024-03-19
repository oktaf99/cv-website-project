import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Aos from "aos";

import Navigation from "./components/Navigation"
import Footer from "./components/Footer"

import Homepage from "./pages/Homepage";
import ProductPage from "./pages/ProductPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

import "./index.css";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" Component={Homepage} />
        <Route path="/product" Component={ProductPage} />
        <Route path="/about" Component={AboutPage} />
        <Route path="/contact" Component={ContactPage} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
