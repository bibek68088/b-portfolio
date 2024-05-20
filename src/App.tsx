import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Stall from "./components/Stall";
import Resume from "./components/resume/Resume";


const App = () => {
  return (
    <div className="">
      <Navbar />
      <Home />
      <About />
      <Resume />
      <Stall />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
