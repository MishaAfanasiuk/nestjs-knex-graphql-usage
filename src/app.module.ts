import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { User } from './database/models/user';
import { Comment } from './database/models/comment';
import { ProfileModule } from './profile/profile.module';
import { Profile } from './database/models/profile';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
  }),
    DatabaseModule.forRoot([User, Profile, Comment]),
    UsersModule,
    ProfileModule,
    CommentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
