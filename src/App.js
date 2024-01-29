/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/


import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [hoveredWord, setHoveredWord] = useState(null);

  const handleMouseOver = (word) => {
    setHoveredWord(word);
  };

  const handleMouseOut = () => {
    setHoveredWord(null);
  };

  return (
    <div className="app">
      <div className="background-image"></div>
      <div className="floating-words">
        <div
          className={`floating-word hello ${hoveredWord === 'About' ? 'move-right' : ''}`}
          onMouseOver={() => handleMouseOver('About')}
          onMouseOut={handleMouseOut}
        >
          Hello
        </div>
        <div
          className={`floating-word i-am ${hoveredWord === 'Work' ? 'move-right' : ''}`}
          onMouseOver={() => handleMouseOver('Work')}
          onMouseOut={handleMouseOut}
        >
          I am
        </div>
        <div
          className={`floating-word champion ${hoveredWord === 'Contact' ? 'move-right' : ''}`}
          onMouseOver={() => handleMouseOver('Contact')}
          onMouseOut={handleMouseOut}
        >
          Champion
        </div>
      </div>
    </div>
  );
};

export default App;

