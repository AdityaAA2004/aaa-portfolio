import React, { useState, useEffect } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const obs = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) e.target.classList.add('in'); }),
      { threshold: 0.07, rootMargin: '0px 0px -32px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const ids = ['home', 'experience', 'portfolio', 'skills', 'contact'];
    const obs = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { threshold: 0.15 }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <div className="App">
      <Navigation active={active} />
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
