import { DynamicModule, Module } from '@nestjs/common';
import { ConnectionService } from './connection.service';
import { createProviders } from './createProviders';
import { Model, initialize } from 'objection';
const Knex = require('knex');

@Module({
  providers: [ConnectionService],
})
export class DatabaseModule {
  static forRoot(entities = [], options?): DynamicModule {
    const knex = Knex({
      client: 'sqlite3',
      useNullAsDefault: true,
      connection: {
        filename: './example.db'
      }
    });

    const providers = createProviders(entities, knex);



    // const connectionProvider = {
    //   provide: 'CONNECTION',
    //   useFactory: async () => {
    //     await initialize(knex, entities);
    //     console.log('Connection established')
    //   }
    // };

    return {
      global: true,
      module: DatabaseModule,
      providers: providers,
      exports: providers,
    };
  }
}
