import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Skills';
import Home from './components/Home';
import Internship from './components/Experience';
import NavBar from './components/NavBar';
import Portfolio from './components/Portfolio';
import SocialLinks from './components/SocialLinks';

function App() {
  return (
    
<div className='flex flex-col bg-gradient-to-b from-gray-800 to-slate-800'>
  <NavBar />
  <Home />
  <About />
  <Portfolio />
  <Experience />
  <Internship />
  <Contact />
  <SocialLinks />
</div>
  );
}

export default App;
