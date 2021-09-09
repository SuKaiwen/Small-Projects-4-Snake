import React from 'react';

function Body() {
  return (
      <div className="board">
        <div className="snake" style = {{top: "0%"}}></div>
        <div className="snake" style = {{top: "0%", left:"5%"}}></div>
        <div className="snake" style = {{top: "0%", left:"10%"}}></div>
      </div>
  );
}

export default Body;
