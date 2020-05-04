import { Field, InputType } from '@nestjs/graphql';
import { MaxLength, IsBoolean, IsOptional } from 'class-validator';

@InputType()
export class NewUserInput {
  @Field()
  @MaxLength(50)
  email: string;

  @Field({ defaultValue: false})
  @IsOptional()
  @IsBoolean()
  ban: boolean;

  @Field({ defaultValue: true})
  @IsOptional()
  @IsBoolean()
  active: boolean;
}
