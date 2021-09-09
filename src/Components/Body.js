import React, {useState, useEffect, useRef, Component} from 'react';

class Body extends Component{

    constructor(props){
        super(props);

        this.state={
            snake: [[25,25], [25,30], [25, 35]],
            gameOver: false,
            start: false,
            direction: "down",
        };
    }

    componentDidMount(){
        this.interval = setInterval(() => this.appendDirection(this.state.direction), 500);
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    appendDirection(direction){
        switch(direction){
            case 'right':
                this.appendRight();
                break;
            case 'left':
                this.appendLeft();
                break;
            case 'up':
                this.appendUp();
                break;
            case 'down':
                this.appendDown();
                break;
            default:
                this.appendRight();
                break;
        }
    }

    appendRight(){
        var x = this.state.snake.length;
        var temp = this.state.snake.slice(1);
        var lastCoord = this.state.snake.slice(x-1);
        var nextCoord = [lastCoord[0][0], lastCoord[0][1]+5];
        if(nextCoord[1] > 95){
            nextCoord[1] = 0;
        }
        for (var i = 0; i < temp.length; i++){
            var current = temp[i];
            if(current[0] === nextCoord[0] && current[1] === nextCoord[1]){
                this.setState({
                    gameOver: true,
                });
            }
        }
        temp.push(nextCoord);
        this.setState({
            snake: temp,
        });
    }

    appendLeft(){
        var x = this.state.snake.length;
        var temp = this.state.snake.slice(1);
        var lastCoord = this.state.snake.slice(x-1);
        var nextCoord = [lastCoord[0][0], lastCoord[0][1]-5];
        if(nextCoord[1] < 0){
            nextCoord[1] = 95;
        }
        for (var i = 0; i < temp.length; i++){
            var current = temp[i];
            if(current[0] === nextCoord[0] && current[1] === nextCoord[1]){
                this.setState({
                    gameOver: true,
                });
            }
        }
        temp.push(nextCoord);
        this.setState({
            snake: temp,
        });
    }

    appendUp(){
        var x = this.state.snake.length;
        var temp = this.state.snake.slice(1);
        var lastCoord = this.state.snake.slice(x-1);
        var nextCoord = [lastCoord[0][0]-5, lastCoord[0][1]];
        if(nextCoord[0] < 0){
            nextCoord[0] = 95;
        }
        for (var i = 0; i < temp.length; i++){
            var current = temp[i];
            if(current[0] === nextCoord[0] && current[1] === nextCoord[1]){
                this.setState({
                    gameOver: true,
                });
            }
        }
        temp.push(nextCoord);
        this.setState({
            snake: temp,
        });
    }

    appendDown(){
        var x = this.state.snake.length;
        var temp = this.state.snake.slice(1);
        var lastCoord = this.state.snake.slice(x-1);
        var nextCoord = [lastCoord[0][0]+5, lastCoord[0][1]];
        if(nextCoord[0] > 95){
            nextCoord[0] = 0;
        }
        for (var i = 0; i < temp.length; i++){
            var current = temp[i];
            if(current[0] === nextCoord[0] && current[1] === nextCoord[1]){
                this.setState({
                    gameOver: true,
                });
            }
        }
        temp.push(nextCoord);
        this.setState({
            snake: temp,
        });
    }

    render(){
        return (
            <>
                <div className="board">
                {this.state.snake.map(x => (<div className="snake" style={{top:`${x[0]}`+"%", left:`${x[1]}`+"%"}}></div>))}
                </div>
                <h1>{this.state.gameOver ? "Game Over" : "Good Luck"}</h1>
            </>
        );
    };
}

export default Body;
