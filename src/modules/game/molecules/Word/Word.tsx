import React from 'react';
import './Word.scss';

import Cell from '../../atoms/Cell/Cell';

function Word(): JSX.Element {
  return (
    <div className="word">
      <Cell letter="P" />
      <Cell letter="E" status="rightPosition" />
      <Cell letter="N" status="rightLetter" />
      <Cell letter="E" status="fail" />
    </div>
  );
}

export default Word;
