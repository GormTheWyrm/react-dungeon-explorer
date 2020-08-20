import React from 'react';
import './grid.css';

function Grid(props) {
// I should show a grid... 
// testObject starts at 50% left and top

//replace with props...

  return (
    <div className="col-md-12 col-lg-6 grid">
        <div className="testObject" style={{left: props.x + "%", bottom: props.y + "%"}} 
        onKeyPress={() => props.HandleMove}
        
        >
        </div>
    </div>
  );
}

export default Grid;