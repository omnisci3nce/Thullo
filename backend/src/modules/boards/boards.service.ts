import { Board } from "./board.model";

export async function getAll() {
    const boards = Board.query()
    return boards
}

export async function getById(id: string) {
    return Board.query().findById(id)
}