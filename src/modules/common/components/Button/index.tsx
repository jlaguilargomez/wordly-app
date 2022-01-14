import React from 'react';
import './Button.scss';

interface IButton {
  text?: string;
  type?: 'confirm' | 'cancel' | 'info';
  clickHandler: () => void;
}

function Button({
  text = 'Button',
  type = 'info',
  clickHandler,
}: IButton): JSX.Element {
  return (
    <button type="button" className={`btn btn--${type}`} onClick={clickHandler}>
      {text}
    </button>
  );
}

export default Button;
