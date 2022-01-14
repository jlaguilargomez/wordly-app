import React from 'react';
import './Panel.scss';

import Word from '../../molecules/Word/Word';

function Panel(): JSX.Element {
  return (
    <div className="panel">
      <Word text="COSA" />
      <Word text="PENES" />
    </div>
  );
}

export default Panel;
