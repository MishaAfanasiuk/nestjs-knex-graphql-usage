import { Field, InputType } from '@nestjs/graphql';
import { MaxLength, IsString } from 'class-validator';

@InputType()
export class NewProfileData {
  @Field()
  @IsString()
  @MaxLength(50)
  nickname: string;

  @Field()
  @IsString()
  @MaxLength(50)
  firstName: string;

  @Field()
  @IsString()
  @MaxLength(50)
  lastName: string;
}
