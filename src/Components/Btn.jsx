import React from 'react';
import classNames from 'classnames';

function Btn({onClick, className, outline, children}) {
  return (
    <button
      onClick={onClick}
      className={classNames('button', className, {
        'button--outline': outline,
      })}>
      {children}
    </button>
  );
}

export default Btn;
