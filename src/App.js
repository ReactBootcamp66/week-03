import React, { useState } from 'react';
import './App.css';

import ThemeContext, { colors } from './contexts/ThemeContext';
import SessionContext from './contexts/SessionContext';

import useTimeout from './hooks/useTimeout';
import Router from './Router';

function App() {
  const [theme, setTheme] = useState(colors.primary);
  const [isAuthenticated, setAuthenticated] = useState(false);

  useTimeout(() => {
    console.log('Merhaba useTimeout');
  }, 5);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      <SessionContext.Provider
        value={{
          isAuthenticated,
          setAuthenticated,
        }}
      >
        <div className="App">
          <h1 className="App-header">Todo App</h1>
          <div className="App-container">
            <Router />
          </div>
        </div>
      </SessionContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
