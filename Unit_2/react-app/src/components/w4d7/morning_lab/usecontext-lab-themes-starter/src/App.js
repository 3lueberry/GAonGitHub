import React, { useState } from 'react';
import './styles.css';
import LeftComp from './LeftComp';
import RightComp from './RightComp';

const themes = {
  light: {
    background: 'lightblue',
    color: 'black'
  },
  dark: {
    background: '#222222',
    color: 'white'
  }
};

export default function App() {
  const [activeTheme, setActiveTheme] = useState(themes.light);

  return (
    <div className="App">
      <h2>Click the button to toggle themes</h2>
      <button>Toggle Themes</button>
      <div className="children">
        <LeftComp />
        <RightComp />
      </div>
    </div>
  );
}
