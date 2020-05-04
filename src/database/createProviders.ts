import { Provider } from '@nestjs/common';

export const createProviders = (entities: any[], knex): Array<Provider> => {
  return entities.map((entity) => (entity.knex(knex), {
    provide: entity.name,
    useValue: entity
  }))
};
