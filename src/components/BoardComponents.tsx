import React, {FC} from 'react';
import {Board} from "../models/Board";
import CellComponent from "./CellComponent";

interface BoardProps {
    board: Board;
    setBoard: (board : Board) => void;
}
const BoardComponents: FC<BoardProps> = ({board, setBoard}) => {
    return (
        <div className='board'>
            {board.cells.map((row, index) =>
                <React.Fragment key={index}>
                    {row.map(cell =>
                        <CellComponent

                        />
                    )}
                </React.Fragment>
            )}
        </div>
    );
};

export default BoardComponents;