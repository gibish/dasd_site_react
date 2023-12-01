import "./Styles/null.css";
import "./Styles/style.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";

import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Department from "./pages/Department";
import Institute from "./pages/Institute";
import Projects from "./pages/Projects";
import Project01 from "./pages/Project01";
import Project02 from "./pages/Project02";
import Project03 from "./pages/Project03";
import Staff from "./pages/Staff";
import Publications from "./pages/Publications";
import Contacts from "./pages/Contacts";

import ScrollToTop from "./utils/scrollToTop";

export const CurrentLanguageContext = createContext("en");

function App() {
  const [currentLanguage, setCurrentLanguage] = useState("en");
  return (
    <CurrentLanguageContext.Provider value={{ currentLanguage, setCurrentLanguage }}>
      <div className="App">
        <Router>
          <ScrollToTop />
          <Header />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/department" element={<Department />} />
            <Route path="/institute" element={<Institute />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project01" element={<Project01 />} />
            <Route path="/project02" element={<Project02 />} />
            <Route path="/project03" element={<Project03 />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
          <Footer />
        </Router>

        {/* <script src="./lng/lng_header.js"></script>
      <script src="./lng/lng_main.js"></script>
      <script src="./script.js"></script> */}
      </div>
    </CurrentLanguageContext.Provider>
  );
}

export default App;
