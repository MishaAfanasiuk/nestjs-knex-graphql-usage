import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CommentModelGraphql {
  @Field(type => ID)
  id: number;

  @Field()
  comment: string;

  @Field()
  userId: number;

  @Field()
  createdAt: string;

  @Field()
  updatedAt: string;

  @Field()
  deletedAt: string;
}
