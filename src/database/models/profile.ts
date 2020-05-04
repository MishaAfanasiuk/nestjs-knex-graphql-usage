import { BaseModel } from './base';

export class Profile extends BaseModel {
  nickname: string;
  firstName: string;
  lastName: string;


  static get tableName() {
    return 'profiles';
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

