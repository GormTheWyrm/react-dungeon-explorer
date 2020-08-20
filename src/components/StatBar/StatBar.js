import React from 'react';
import './statBar.css';

function StatBar(props) {
// I should show a grid... 
// on keypress...

  return (
    <div className="col-md-12 statBar">
        <p>HP: XX   MaxHP: XX</p>
        <p>LVL: XX</p>
        <p>Gold: XX</p>
        {/* <button onClick={() => props.handleClickUp}>Up</button> */}
    </div>
  );
}

export default StatBar;