import { Field, InputType } from '@nestjs/graphql';
import { MaxLength, IsString, IsNumber } from 'class-validator';

@InputType()
export class NewComment {
  @Field()
  @IsString()
  @MaxLength(50)
  comment: string;

  @Field()
  @IsNumber()
  userId: number;
}
