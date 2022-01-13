import React from 'react';
import './Cell.scss';

interface ICell {
  letter: string;
  status?: 'blank' | 'rightPosition' | 'rightLetter' | 'fail';
}

function Cell({ letter = '', status = 'blank' }: ICell): JSX.Element {
  return <span className={`cell cell--${status}`}>{letter}</span>;
}

export default Cell;
