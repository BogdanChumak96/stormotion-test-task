import React, { useState } from 'react';
import { Modes } from '../constants/modes';
import { IGameModeProvider } from '../constants/types';

export const GameModeContext = React.createContext({
  gameMode: Modes.PC,
  setGameMode: (mode: string) => {},
});

export const GameModeProvider: React.FC<IGameModeProvider> = ({ children }) => {
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
