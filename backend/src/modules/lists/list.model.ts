import { Model } from 'objection'
import { Board } from '../boards/board.model'

export class List extends Model {
    id!: string
    name!: string
    board_id!: string

    static tableName = 'lists'
  
    static relationMappings = () => ({
      board: {
        relation: Model.BelongsToOneRelation,
        modelClass: Board,
        join: {
          from: 'lists.board_id',
          to: 'boards.id'
        }
      }
    })
  }