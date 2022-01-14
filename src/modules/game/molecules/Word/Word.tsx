import React, { useState, useEffect } from 'react';
import './Word.scss';

import CellInput from '../../atoms/CellInput/CellInput';
import useWordlyContext from '../../../../hooks/useWordlyContext';

interface IWord {
  text: string;
}

const splitIntoLetters = (word: string): Array<string> =>
  word.toUpperCase().split('');

function Word({ text }: IWord): JSX.Element {
  const [isWordEnabled, setIsWordEnabled] = useState<boolean>(true);
  // ! CONSIDERA EL USO DE USEEFFECTLAYOUT
  const [letters, setLetters] = useState<Array<any>>([]);

  const { numOfValues } = useWordlyContext();
  console.log(numOfValues);

  useEffect(() => {
    setLetters(splitIntoLetters(text));
  }, []);

  const handleCellChange = (event: any): void => {
    console.log(event);
  };

  return (
    <div className="word">
      {isWordEnabled ? <p>WordEnabled</p> : <p>Word disabled</p>}
    </div>
  );
}

export default Word;
