import { Board } from "./board.model";
import { List } from "../lists/list.model";

export async function getAll(withLists=false) {
    const boards = Board.query().withGraphFetched('lists')
    return boards
}

export async function getById(id: string) {
    return Board.query().findById(id)
}

export async function getListsByBoardId(boardId: string) {
    return List.query().where('board_id', boardId)
}