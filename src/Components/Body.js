import React, {useState, useEffect} from 'react';

const Body = () => {
  const [snake, setSnake] = useState([]);

  useEffect(() => {
    setSnake([[0,0], [0,2]])
  }, [])

  const appendSnake = () => {
    var temp = snake.slice();
    temp.push([0, 3]);
    setSnake(temp);

  }

  return (
      <>
          <div className="board">
            <div className="snake" style = {{top: "0%"}}></div>
            <div className="snake" style = {{top: "0%", left:"5%"}}></div>
            <div className="snake" style = {{top: "0%", left:"10%"}}></div>
          </div>
          <h1>{snake}</h1>
          <button onClick={(e) => appendSnake(e)}>OnClick</button>
      </>
  );
}

export default Body;
