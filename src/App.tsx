import React, {useEffect, useState} from 'react';
import './App.css';
import BoardComponents from "./components/BoardComponents";
import {Board} from "./models/Board";

function App() {
    const [board, setBoard] = useState(new Board());

    useEffect(() => {
        restart();
    }, [])

    function restart() {
        const newBoard = new Board();
        newBoard.initCells();
        newBoard.addFigures();
        setBoard(newBoard);
    }

    return (
        <div className="App">
            <BoardComponents
                board={board}
                setBoard={setBoard}
            />
        </div>
    );
}

export default App;
