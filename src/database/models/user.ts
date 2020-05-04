import { BaseModel } from './base';

export class User extends BaseModel {
  email: string;
  profileId: number;
  ban: boolean;
  active: boolean;

  static get tableName() {
    return 'users';
  }

  static get jsonSchema () {
    return {
      properties: {
        id: {type: 'integer'}
      }
    }
  }

  // static get relationMappings() {
  //   return {
  //     children: {
  //       relation: Model.HasManyRelation,
  //       modelClass: Person,
  //       join: {
  //         from: 'persons.id',
  //         to: 'persons.parentId'
  //       }
  //     }
  //   };
  // }
}

