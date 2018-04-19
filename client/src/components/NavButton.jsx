import React from 'react';

const NavButton = props => (
  <div id={props.buttonId} className={props.selected === props.buttonId ? 'navButton selected' : 'navButton'} onClick={props.navButtonClick}>
    {props.display}
    {props.total !== undefined &&
      <span>{props.total}</span>
    }
  </div>
);


export default NavButton;
