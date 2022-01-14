import React, { useContext } from 'react';
import './Panel.scss';

import Word from '../../molecules/Word/Word';
import { WordlyContext } from '../../../../context/WordlyContext';
import CellInput from '../../atoms/CellInput/CellInput';
import { IWord } from '../../../../context/WordlyReducers';

function Panel(): JSX.Element {
  const { gameStatus } = useContext(WordlyContext);
  console.log(gameStatus);

  return (
    <div className="panel">
      {gameStatus.map((word: IWord) => (
        <Word key={word.id} word={word} />
      ))}
    </div>
  );
}

export default Panel;
