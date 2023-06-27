/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { AppRouter } from './components/AppRouter';
import { GameModeProvider } from './providers/GameModeContext';

export const App = (): JSX.Element => {
  return (
    <GameModeProvider>
      <AppRouter />
    </GameModeProvider>
  );
};
