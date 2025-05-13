import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';
import SocialSidebar from './components/SocialSidebar';

function App() {
  return (
    <div className="App">
      <SocialSidebar />
      <Navigation />
      <main className="App-main">
        <section id="home"><Home /></section>
        <section id="experience"><Experience /></section>
        <section id="portfolio"><Portfolio /></section>
        <section id="skills"><Skills /></section>
        <section id="contact"><Contact /></section>
      </main>
    </div>
  );
}

export default App;
