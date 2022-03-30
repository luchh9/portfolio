import "./assets/css/style.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Svg from "./components/Svg";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <>
      <Navbar />
      <Header />

      <About />

      <Portfolio />
      <Svg
        fill="#0d1520"
        d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
