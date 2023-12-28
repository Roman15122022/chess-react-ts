
import {Figure} from "./figures/Figure";
import {Board} from "./Board";
import {Colors} from "./Colors";

export class Cell {
    readonly x: number;
    readonly y: number;
    readonly color: Colors;
    figures: Figure | null;
    board: Board;
    available: boolean; // can walk around
    id: number; // for key

    constructor(board: Board, x: number, y: number, color: Colors, figures: Figure | null) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.figures = figures;
        this.board = board;
        this.available = false;
        this.id = Math.random();
    }
}
