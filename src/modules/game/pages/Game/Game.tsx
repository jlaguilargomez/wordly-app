import React from 'react';
import './Game.scss';

import Button from '../../../common/components/Button/Button';
import Message from '../../../common/components/Message/Message';
import Panel from '../../molecules/Panel/Panel';

function Game(): JSX.Element {
  return (
    <div className="container">
      <Message text="Something REALLY funny" />
      <Panel />
      <div>
        <Button />
        <Button />
      </div>
    </div>
  );
}

export default Game;
