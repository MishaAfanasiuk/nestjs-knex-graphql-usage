import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Info, ResolveField, Parent } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { NewUserInput } from './dto/new-user.input';
import { UsersModel } from './users.model';
import { ProfileModelGraphql } from '../profile/profile.model.graphql';
import { ProfileService } from '../profile/profile.service';
import { BaseModel } from '../database/models/base';
import { NewProfileData } from '../profile/dto/newProfileData.dto';
import { CommentModelGraphql } from '../comments/comment.model.graphql';
import { CommentsService } from '../comments/comments.service';
import { PaginationArgs } from '../base/dto/pagination.dto';

@Resolver(of => UsersModel)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly profilesService: ProfileService,
    private readonly commentsService: CommentsService
  ) {}

  @Query(returns => UsersModel)
  async user(@Args('id') id: string): Promise<UsersModel> {
    const recipe = await this.usersService.findOneById(id);
    if (!recipe) {
      throw new NotFoundException(id);
    }
    return recipe;
  }

  @Query(returns => [UsersModel])
  users(@Args() pagination: PaginationArgs): Promise<BaseModel[]> {
    return this.usersService.findAll(pagination);
  }

  @Mutation(returns => UsersModel)
  async addUser(
    @Args('newUserData') newUsersModelData: NewUserInput,
    @Args('newProfileData') newProfileData: NewProfileData
  ): Promise<{id}> {
    return this.usersService.create(newUsersModelData, newProfileData);
  }

  @ResolveField(returns => ProfileModelGraphql)
  profile(@Parent() user: UsersModel) {
    return this.profilesService.getUserProfile(user.profileId)
  }

  @ResolveField(returns => CommentModelGraphql)
  comments(@Parent() user: UsersModel) {
    return this.commentsService.getUserComments(user.id)
  }
}
