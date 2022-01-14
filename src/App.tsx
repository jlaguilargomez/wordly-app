import React from 'react';
import './App.scss';
import { WordlyProvider } from './context/WordlyContext';
import Game from './modules/game/pages/Game/Game';

function App(): JSX.Element {
  return (
    <WordlyProvider>
      <Game />
    </WordlyProvider>
  );
}

export default App;
