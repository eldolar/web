import React, { useState, useEffect } from 'react';
import iconSet from './../fonts/selection.json';
import IcomoonReact from 'icomoon-react';
import base from './../styles/_variables.scss';

const ToggleTheme = () => {
  // useState will call this function on the first rendering.
  const initialTheme = () => window.localStorage.getItem('theme') || 'light';

  const [theme, setTheme] = useState(initialTheme);

  useEffect(
    () => {
      window.localStorage.setItem('theme', theme);
      document.documentElement.classList.add('theme-transition');
      document.documentElement.setAttribute('data-theme', theme);
      window.setTimeout(() => {
        document.documentElement.classList.remove('theme-transition');
      }, 1000);
    },
    [theme],
  );

  const toggle = () => {
    const mode = theme === 'light' ? 'dark' : 'light';
    setTheme(mode);
  };

  const getIcon = () => (theme === 'light' ? 'face-sunglasses' : 'face-sunglasses1');

  return(
    <button className="mode" onClick={toggle}>
      <IcomoonReact
        iconSet={iconSet}
        size={18}
        color={base.iconcolor}
        onClick={toggle}
        icon={getIcon()} />
    </button>
  );
};

export default ToggleTheme;
