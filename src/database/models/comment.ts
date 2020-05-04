import { BaseModel } from './base';

export class Comment extends BaseModel {
  comment: string;
  userId: number;

  static get tableName() {
    return 'comments';
  }

  static get jsonSchema () {
    return {
      properties: {
        id: {type: 'integer'}
      }
    }
  }
}

