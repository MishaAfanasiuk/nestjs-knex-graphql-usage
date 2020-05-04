import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { ProfileService } from '../profile/profile.service';
import { CommentsService } from '../comments/comments.service';

@Module({
  providers: [UsersService, UsersResolver, ProfileService, CommentsService]
})
export class UsersModule {}
