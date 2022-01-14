import React, { ChangeEvent } from 'react';

import { IWord } from '../../../../context/WordlyReducers';
import CellStatus from '../../../../interfaces/CellStatus';
import CellInput from '../../atoms/CellInput/CellInput';
import './Word.scss';

interface IWordComponent {
  word: IWord;
}

function Word({ word }: IWordComponent): JSX.Element {
  // ! CONSIDERA EL USO DE USEEFFECTLAYOUT

  const handleCellChange = (event: ChangeEvent<HTMLInputElement>): void => {
    console.log(event);
  };

  return (
    <div className="word">
      {word.isWordEnabled
        ? word.letters.map((letter: CellStatus, index: number) => (
            <CellInput
              // eslint-disable-next-line react/no-array-index-key
              key={`${letter}-${index}`}
              cellValue={letter.value}
              onHandleChange={handleCellChange}
            />
          ))
        : word.letters.map(() => <p>Holla</p>)}
    </div>
  );
}

export default Word;
