import React from 'react';
import './TweaksPanel.css';
import { Theme, AccentKey, Spacing, Accent } from '../types';

interface TweaksPanelProps {
  visible: boolean;
  onClose: () => void;
  theme: Theme;
  setTheme: (v: Theme) => void;
  accentKey: AccentKey;
  setAccentByKey: (key: AccentKey) => void;
  spacing: Spacing;
  setSpacing: (v: Spacing) => void;
  accents: Accent[];
}

const TweaksPanel: React.FC<TweaksPanelProps> = ({
  visible, onClose, theme, setTheme, accentKey, setAccentByKey, spacing, setSpacing, accents,
}) => (
  <div className={`tp${visible ? ' on' : ''}`}>
    <div className="tp-head">
      <span className="tp-title">Tweaks</span>
      <span className="tp-x" onClick={onClose}>✕</span>
    </div>
    <div className="tp-row">
      <p className="tp-lbl">Theme</p>
      <div className="tp-opts">
        <button className={`tp-btn${theme === 'dark'  ? ' on' : ''}`} onClick={() => setTheme('dark')}>Dark</button>
        <button className={`tp-btn${theme === 'light' ? ' on' : ''}`} onClick={() => setTheme('light')}>Light</button>
      </div>
    </div>
    <div className="tp-row">
      <p className="tp-lbl">Accent</p>
      <div className="tp-opts tp-swatches">
        {accents.map((a) => (
          <div
            key={a.key}
            className={`swatch${accentKey === a.key ? ' on' : ''}`}
            style={{ background: a.css }}
            onClick={() => setAccentByKey(a.key)}
            title={a.key}
          />
        ))}
      </div>
    </div>
    <div className="tp-row">
      <p className="tp-lbl">Spacing</p>
      <div className="tp-opts">
        <button className={`tp-btn${spacing === 'compact'  ? ' on' : ''}`} onClick={() => setSpacing('compact')}>Compact</button>
        <button className={`tp-btn${spacing === 'default' ? ' on' : ''}`} onClick={() => setSpacing('default')}>Spacious</button>
      </div>
    </div>
  </div>
);

export default TweaksPanel;
