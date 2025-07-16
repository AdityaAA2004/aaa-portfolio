import React, { useRef } from 'react';
import './SocialSidebar.css';


const resumePDF = require('../assets/Aditya_Archunan_Anand.pdf');

const links = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/',
    icon: (
      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
    ),
  },
  {
    name: 'GitHub',
    url: 'https://github.com/',
    icon: (
      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576 4.765-1.589 8.199-6.085 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
    ),
  },
  {
    name: 'Resume',
    url: resumePDF,
    icon: (
      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
    ),
  },
  {
    name: 'Email',
    url: 'mailto:your@email.com',
    icon: (
      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 13.065l-8-5.065v10h16v-10l-8 5.065zm8-7.065h-16c-1.104 0-2 .896-2 2v.217l10 6.333 10-6.333v-.217c0-1.104-.896-2-2-2z"/></svg>
    ),
  },
];

const SocialSidebar: React.FC = () => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // Remove focus from all links after click
    if (sidebarRef.current) {
      const links = sidebarRef.current.querySelectorAll('a');
      links.forEach(link => (link as HTMLAnchorElement).blur());
    }
  };

  return (
    <div className="social-sidebar" ref={sidebarRef}>
      {links.map(link => (
        <a
          key={link.name}
          href={link.url}
          className={`sidebar-link sidebar-link-${link.name.toLowerCase()}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
        >
          <span className="sidebar-icon">{link.icon}</span>
          <span className="sidebar-label">{link.name}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialSidebar; 