import React from 'react';
import './Game.scss';

import Button from '../../../common/components/Button';
import Message from '../../../common/components/Message/Message';
import Panel from '../../organism/Panel/Panel';

function Game(): JSX.Element {
  return (
    <div className="container">
      <Message text="Something REALLY funny" />
      <Panel />
      <div className="btn-wrapper">
        <Button
          text="Send"
          type="confirm"
          clickHandler={() => console.log('button')}
        />
        <Button
          text="Clear"
          type="cancel"
          clickHandler={() => console.log('button')}
        />
      </div>
    </div>
  );
}

export default Game;
