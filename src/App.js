import "./Styles/null.css";
import "./Styles/style.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Department from "./pages/Department";
import Institute from "./pages/Institute";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Staff from "./pages/Staff";
import Publications from "./pages/Publications";
import Contacts from "./pages/Contacts";

import ScrollToTop from "./utils/scrollToTop";

function App() {
  return (
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
          <Route path="/project/:id" element={<Project />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>

        <Footer />
      </Router>

      <script src="./lng/lng_header.js"></script>
      <script src="./lng/lng_main.js"></script>
      <script src="./script.js"></script>
    </div>
  );
}

export default App;
