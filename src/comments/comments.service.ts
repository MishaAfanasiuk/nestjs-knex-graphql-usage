import { Inject, Injectable } from '@nestjs/common';
import { Comment } from '../database/models/comment';
import { NewComment } from './dto/newComment';
import { PaginationArgs } from '../base/dto/pagination.dto';

@Injectable()
export class CommentsService {
  constructor(
    @Inject('Comment') private commentModel: typeof Comment
  ){}

  findOneById(id: number){
    return this.commentModel.query().findById(id)
  }

  findAll(pagination: PaginationArgs) {
    return this.commentModel.findAllWithPagination(pagination);
  }

  create(comment: NewComment) {
    return this.commentModel.query().insert(comment);
  }

  getUserComments(userId: number) {
    return this.commentModel.query().where({userId})
  }
}
