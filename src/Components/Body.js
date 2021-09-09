import React, {useState, useEffect} from 'react';

const Body = () => {
    const [snake, setSnake] = useState([]);
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        setSnake([[25,25], [25,30], [25, 35]])
    }, [])

    const appendRight = () => {
        var x = snake.length;
        var temp = snake.slice(1);
        var lastCoord = snake.slice(x-1);
        console.log(lastCoord);
        var rightCoord = [lastCoord[0][0], lastCoord[0][1]+5];
        if(rightCoord[1] > 95){
            rightCoord[1] = 0;
        }
        for (var i = 0; i < temp.length; i++){
            var current = temp[i];
            if(current[0] === rightCoord[0] && current[1] === rightCoord[1]){
                setGameOver(true);
            }
        }
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
        if(downCoord[0] > 95){
            downCoord[0] = 0;
        }
        for (var i = 0; i < temp.length; i++){
            var current = temp[i];
            if(current[0] === downCoord[0] && current[1] === downCoord[1]){
                setGameOver(true);
            }
        }
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
        if(upCoord[0] < 0){
            upCoord[0] = 95;
        }
        for (var i = 0; i < temp.length; i++){
            var current = temp[i];
            if(current[0] === upCoord[0] && current[1] === upCoord[1]){
                setGameOver(true);
            }
        }
        console.log(upCoord);
        temp.push(upCoord);
        setSnake(temp);
    }

    const appendLeft = () => {
        var x = snake.length;
        var temp = snake.slice(1);
        var lastCoord = snake.slice(x-1);
        var leftCoord = [lastCoord[0][0], lastCoord[0][1] -5];
        if(leftCoord[1] < 0){
            leftCoord[1] = 95;
        }
        console.log(leftCoord);
        console.log(temp);
        for (var i = 0; i < temp.length; i++){
            var current = temp[i];
            if(current[0] === leftCoord[0] && current[1] === leftCoord[1]){
                setGameOver(true);
            }
        }
        console.log(leftCoord);
        temp.push(leftCoord);
        setSnake(temp);
    }

    return (
        <>
            <div className="board">
            {snake.map(x => (<div className="snake" style={{top:`${x[0]}`+"%", left:`${x[1]}`+"%"}}></div>))}
            </div>
            <h1>{gameOver ? "Game Over" : "Good Luck"}</h1>
            <button onClick={(e) => appendLeft(e)}>OnClick</button>
        </>
    );
}

export default Body;
