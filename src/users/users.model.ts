import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ProfileModelGraphql } from '../profile/profile.model.graphql';
import { CommentModelGraphql } from '../comments/comment.model.graphql';

@ObjectType()
export class UsersModel {
  @Field(type => ID)
  id: number;

  @Field()
  profileId: number;

  @Field()
  email: string;

  @Field()
  ban: boolean;

  @Field()
  active: boolean;

  @Field()
  createdAt: string;

  @Field()
  updatedAt: string;

  @Field()
  deletedAt: string;

  @Field({ defaultValue: null })
  profile?: ProfileModelGraphql;

  @Field(type => [CommentModelGraphql], { defaultValue: null })
  comments?: CommentModelGraphql[]
}
