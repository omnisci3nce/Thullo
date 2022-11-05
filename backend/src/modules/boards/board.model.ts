import { Model } from 'objection'
import { List } from '../lists/list.model'

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