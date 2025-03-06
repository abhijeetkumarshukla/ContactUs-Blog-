import "./App.css";
import {   Routes, Route } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
    <Routes>
       <Route path="/" element={<HomePage/>} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/blogs" element={<BlogPage />} />
    </Routes>
    <Footer/>
    </>
  );
};

export default App;
