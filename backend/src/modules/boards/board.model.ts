import { Model, RelationMappings, RelationMappingsThunk } from 'objection'

export class List extends Model {
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

export class Board extends Model {
  id!: string
  name!: string
  description!: string

  static tableName = 'boards'
  
  static relationMappings = () => ({
    lists: {
      relation: Model.HasManyRelation,
      modelClass: List,
      join: {
        from: 'boards.id',
        to: 'lists.board_id'
      }
    }
  })
}