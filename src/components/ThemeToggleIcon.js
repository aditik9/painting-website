'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { BsSunFill, BsMoonStarsFill } from 'react-icons/bs'; // Install react-icons if you haven't: npm install react-icons

function ThemeToggleIcon() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div
      onClick={toggleTheme}
      className="theme-toggle-icon"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: '1000',
        cursor: 'pointer',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: theme === 'light' ? '#f8f9fa' : '#212529',
        color: theme === 'light' ? '#212529' : '#f8f9fa',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '1.2rem',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
      }}
    >
      {theme === 'light' ? <BsMoonStarsFill /> : <BsSunFill />}
    </div>
  );
}

export default ThemeToggleIcon;