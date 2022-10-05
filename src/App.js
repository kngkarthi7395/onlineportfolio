
import './App.css';
import Navbar from './components/Navbar';
import Header from "./components/Header";
import BackParticles from "./components/BackParticles";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import SimpleSlider from './components/Slider';
import Experience from './components/Experience';
import Contact from './components/Contact'; 
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  return (
    <div>
      <Navbar></Navbar>
      <Header> </Header>
      <BackParticles></BackParticles>
      <AboutMe></AboutMe>
      <Services></Services>
      <SimpleSlider></SimpleSlider>
      <Experience></Experience>
      <Contact></Contact>
    </div>
  );
}

export default App;
