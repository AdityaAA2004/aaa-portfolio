import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';
import TweaksPanel from './components/TweaksPanel';

export type Theme = 'dark' | 'light';
export type AccentKey = 'coral' | 'amber' | 'indigo' | 'sage';
export type Spacing = 'compact' | 'default';

export interface Accent {
  key: AccentKey;
  val: string;
  hval: string;
  dim: string;
  css: string;
}

export const ACCENTS: Accent[] = [
  { key: 'coral',  val: 'oklch(62% 0.18 22)',  hval: 'oklch(66% 0.18 22)',  dim: 'oklch(62% 0.18 22 / 0.13)',  css: '#C95B45' },
  { key: 'amber',  val: 'oklch(72% 0.15 72)',  hval: 'oklch(76% 0.15 72)',  dim: 'oklch(72% 0.15 72 / 0.13)',  css: '#D4A035' },
  { key: 'indigo', val: 'oklch(60% 0.18 256)', hval: 'oklch(64% 0.18 256)', dim: 'oklch(60% 0.18 256 / 0.13)', css: '#5566F5' },
  { key: 'sage',   val: 'oklch(62% 0.15 162)', hval: 'oklch(66% 0.15 162)', dim: 'oklch(62% 0.15 162 / 0.13)', css: '#2DAF80' },
];

function App() {
  const [theme,     setThemeState]   = useState<Theme>('dark');
  const [accentKey, setAccentKey]    = useState<AccentKey>('coral');
  const [spacing,   setSpacingState] = useState<Spacing>('default');
  const [tweaks,    setTweaks]       = useState(false);
  const [active,    setActive]       = useState('hero');

  // Scroll-reveal observer
  useEffect(() => {
    const obs = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) e.target.classList.add('in'); }),
      { threshold: 0.07, rootMargin: '0px 0px -32px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // Active section tracker for nav highlight
  useEffect(() => {
    const ids = ['hero', 'work', 'projects', 'skills', 'contact'];
    const obs = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { threshold: 0.2 }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  // Apply initial theme on mount
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Tweaks panel toggle from parent frame (edit mode)
  useEffect(() => {
    const fn = (e: MessageEvent) => {
      if (e.data?.type === '__activate_edit_mode')   setTweaks(true);
      if (e.data?.type === '__deactivate_edit_mode') setTweaks(false);
    };
    window.addEventListener('message', fn);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', fn);
  }, []);

  const setTheme = (v: Theme) => {
    setThemeState(v);
    document.documentElement.setAttribute('data-theme', v);
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { theme: v } }, '*');
  };

  const setAccentByKey = useCallback((key: AccentKey) => {
    const a = ACCENTS.find((x) => x.key === key);
    if (!a) return;
    setAccentKey(key);
    const r = document.documentElement;
    r.style.setProperty('--accent',     a.val);
    r.style.setProperty('--accent-h',   a.hval);
    r.style.setProperty('--accent-dim', a.dim);
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { accentKey: key } }, '*');
  }, []);

  const setSpacing = (v: Spacing) => {
    setSpacingState(v);
    document.documentElement.style.setProperty('--sg', v === 'compact' ? '78px' : '116px');
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { spacing: v } }, '*');
  };

  return (
    <div className="App">
      <Navigation active={active} />
      <Home />
      <Experience />
      <Portfolio />
      <Skills />
      <Contact />
      <TweaksPanel
        visible={tweaks}
        onClose={() => { setTweaks(false); window.parent.postMessage({ type: '__edit_mode_dismissed' }, '*'); }}
        theme={theme}
        setTheme={setTheme}
        accentKey={accentKey}
        setAccentByKey={setAccentByKey}
        spacing={spacing}
        setSpacing={setSpacing}
        accents={ACCENTS}
      />
    </div>
  );
}

export default App;
