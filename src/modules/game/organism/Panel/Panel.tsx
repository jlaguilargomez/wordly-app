import React from 'react';
import './Panel.scss';

import Word from '../../molecules/Word/Word';

function Panel(): JSX.Element {
  return (
    <div className="panel">
      <Word />
      <Word />
      <Word />
      <Word />
    </div>
  );
}

export default Panel;
