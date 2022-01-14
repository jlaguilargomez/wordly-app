import React, { ChangeEvent } from 'react';
import './CellInput.scss';

interface ICellInput {
  cellValue?: string;
  onHandleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function CellInput({
  cellValue = '',
  onHandleChange,
}: ICellInput): JSX.Element {
  return (
    <input
      type="text"
      className="cell"
      onChange={onHandleChange}
      maxLength={1}
      value={cellValue}
    />
  );
}

export default CellInput;
