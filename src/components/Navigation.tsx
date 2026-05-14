import React, { useState, useEffect } from 'react';
import './Navigation.css';
const resumePDF = require('../assets/Aditya_Archunan_Anand.pdf');

interface Props { active: string; }

const NAV_ITEMS: [string, string][] = [
  ['Experience', 'experience'],
  ['Projects',   'portfolio'],
  ['Skills',     'skills'],
  ['Contact',    'contact'],
];

const Navigation: React.FC<Props> = ({ active }) => {
  const [scrolled, setScrolled] = useState(false);
  const [pct, setPct] = useState(0);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 55);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setPct(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const toggleTheme = () => {
    const next = dark ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    setDark(!dark);
  };

  return (
    <>
      <div className="scroll-bar" style={{ width: `${pct}%` }} />
      <nav className={scrolled ? 'nav nav-scrolled' : 'nav'}>
        <a href="#home" className="nav-logo">AAA</a>
        <ul className="nav-links">
          {NAV_ITEMS.map(([label, id]) => (
            <li key={id}>
              <a href={`#${id}`} className={active === id ? 'active' : ''}>{label}</a>
            </li>
          ))}
          <li>
            <a href={resumePDF} target="_blank" rel="noreferrer" className="nav-resume">Resume ↗</a>
          </li>
          <li>
            <button className="nav-theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {dark ? '☀' : '☾'}
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
