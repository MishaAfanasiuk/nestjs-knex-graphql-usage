import { Field, ArgsType } from '@nestjs/graphql';

@ArgsType()
export class PaginationArgs {
  @Field({ defaultValue: 0 })
  page?: number;

  @Field({ defaultValue: 20 })
  perPage: number;
}
