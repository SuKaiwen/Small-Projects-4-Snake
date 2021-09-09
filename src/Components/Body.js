import React, {useState, useEffect} from 'react';

const Body = () => {
    const [snake, setSnake] = useState([]);

    useEffect(() => {
    setSnake([[25,25], [25,30], [25, 35]])
    }, [])

    const appendSnake = () => {
    var temp = snake.slice();
    temp.push([0, 3]);
    setSnake(temp);
    }

    const appendRight = () => {
    var x = snake.length;
    var temp = snake.slice(1);
    var lastCoord = snake.slice(x-1);
    console.log(lastCoord);
    var rightCoord = [lastCoord[0][0], lastCoord[0][1]+5];
    console.log(rightCoord);
    temp.push(rightCoord);
    setSnake(temp);
    }

    const appendDown = () => {
      var x = snake.length;
      var temp = snake.slice(1);
      var lastCoord = snake.slice(x-1);
      console.log(lastCoord);
      var downCoord = [lastCoord[0][0] + 5, lastCoord[0][1]];
      console.log(downCoord);
      temp.push(downCoord);
      setSnake(temp);
    }

    const appendUp = () => {
        var x = snake.length;
        var temp = snake.slice(1);
        var lastCoord = snake.slice(x-1);
        console.log(lastCoord);
        var upCoord = [lastCoord[0][0] - 5, lastCoord[0][1]];
        console.log(upCoord);
        temp.push(upCoord);
        setSnake(temp);
    }

    const appendLeft = () => {
        var x = snake.length;
        var temp = snake.slice(1);
        var lastCoord = snake.slice(x-1);
        console.log(lastCoord);
        var leftCoord = [lastCoord[0][0], lastCoord[0][1] -5];
        console.log(leftCoord);
        temp.push(leftCoord);
        setSnake(temp);
    }

    return (
        <>
            <div className="board">
            {snake.map(x => (<div className="snake" style={{top:`${x[0]}`+"%", left:`${x[1]}`+"%"}}></div>))}
            </div>
            <h1>{snake}</h1>
            <button onClick={(e) => appendLeft(e)}>OnClick</button>
        </>
    );
}

export default Body;
