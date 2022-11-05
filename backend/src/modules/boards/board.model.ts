import { Model } from 'objection'

export class Board extends Model {
  id!: string
  name!: string
  description!: string

  static tableName = 'boards'
}