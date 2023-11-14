import "./Styles/null.css";
import "./Styles/style.css";

import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Department from "./pages/Department";
import Institute from "./pages/Institute";
import Projects from "./pages/Projects";
import Staff from "./pages/Staff";
import Publications from "./pages/Publications";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />

      {/* <Home /> */}
      {/* <Department /> */}
      {/* <Institute /> */}
      {/* <Projects /> */}
      {/* <Staff /> */}
      {/* <Publications /> */}
      <Contacts />

      <Footer />

      <script src="./lng/lng_header.js"></script>
      <script src="./lng/lng_main.js"></script>
      <script src="./script.js"></script>
    </div>
  );
}

export default App;
