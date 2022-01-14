import React, { useState, useEffect } from 'react';
import './Word.scss';

import Cell from '../../atoms/Cell/Cell';
import useWordlyContext from '../../../../hooks/useWordlyContext';

interface IWord {
  text: string;
}

const splitIntoLetters = (word: string): Array<string> =>
  word.toUpperCase().split('');

function Word({ text }: IWord): JSX.Element {
  // ! CONSIDERA EL USO DE USEEFFECTLAYOUT
  const [letters, setLetters] = useState<Array<any>>([]);

  const something = useWordlyContext();
  console.log(something);

  useEffect(() => {
    setLetters(splitIntoLetters(text));
  }, []);

  return (
    <div className="word">
      {letters.map((letter: string, index: number) => (
        // eslint-disable-next-line react/no-array-index-key
        <Cell key={`${index}-${letter}`} letter={letter} />
      ))}
    </div>
  );
}

export default Word;
