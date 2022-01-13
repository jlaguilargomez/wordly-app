import React from 'react';
import './Message.scss';

interface IMessage {
  text: string;
  mode?: 'info' | 'alert' | 'success';
}

function Message({ text = 'Message', mode = 'info' }: IMessage): JSX.Element {
  return <div className={`message--${mode}`}>{text}</div>;
}

export default Message;
