import React, { useState } from 'react';
import { Modes } from '../constants/modes';

export const GameModeContext = React.createContext({
  gameMode: Modes.PC,
  setGameMode: (mode) => {},
});

export const GameModeProvider = ({ children }) => {
  const [gameMode, setGameMode] = useState(Modes.PC);

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
