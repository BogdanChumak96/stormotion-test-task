import React, { useState } from 'react';

export const GameModeContext = React.createContext({
  gameMode: 'computer',
  setGameMode: (mode) => {},
});

export const GameModeProvider = ({ children }) => {
  const [gameMode, setGameMode] = useState('computer');

  const handleSetGameMode = (mode) => {
    setGameMode(mode);
  };

  return (
    <GameModeContext.Provider
      value={{ gameMode, setGameMode: handleSetGameMode }}
    >
      {children}
    </GameModeContext.Provider>
  );
};
