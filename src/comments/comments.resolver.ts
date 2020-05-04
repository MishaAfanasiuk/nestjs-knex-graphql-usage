import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BaseModel } from '../database/models/base';
import { CommentModelGraphql } from './comment.model.graphql';
import { CommentsService } from './comments.service';
import { NewComment } from './dto/newComment';
import { PaginationArgs } from '../base/dto/pagination.dto';

@Resolver(of => CommentModelGraphql)
export class CommentsResolver {
  constructor(
    private readonly commentsService: CommentsService
  ) {}

  @Query(returns => CommentModelGraphql)
  async comment(@Args('id') id: number): Promise<CommentModelGraphql> {
    const comment = await this.commentsService.findOneById(id);
    if (!comment) {
      throw new NotFoundException(id);
    }
    return comment;
  }

  @Query(returns => [CommentModelGraphql])
  comments(@Args() pagination: PaginationArgs): Promise<BaseModel[]> {
    return this.commentsService.findAll(pagination);
  }

  @Mutation(returns => CommentModelGraphql)
  async addComment(
    @Args('newCommentData') newCommentData: NewComment,
  ): Promise<{id}> {
    return this.commentsService.create(newCommentData);
  }
}
