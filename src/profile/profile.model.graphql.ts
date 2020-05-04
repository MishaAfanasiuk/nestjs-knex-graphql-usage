import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ProfileModelGraphql {
  @Field(type => ID)
  id: number;

  @Field()
  nickname: string;

  @Field()
  createdAt: string;

  @Field()
  updatedAt: string;

  @Field()
  deletedAt: string;
}
