import { NotFoundException } from '@nestjs/common';
import { Args, Query, Resolver, Info } from '@nestjs/graphql';
import { ProfileService } from './profile.service';
import { ProfileModelGraphql } from './profile.model.graphql';
import { BaseModel } from '../database/models/base';
import { PaginationArgs } from '../base/dto/pagination.dto';

@Resolver(of => ProfileModelGraphql)
export class ProfileResolver {
  constructor(
    private readonly profilesService: ProfileService
  ) {}

  @Query(returns => ProfileModelGraphql)
  async profile(@Args('id') id: number): Promise<ProfileModelGraphql> {
    const profile = await this.profilesService.getUserProfile(id);
    if (!profile) {
      throw new NotFoundException(id);
    }
    return profile;
  }

  @Query(returns => [ProfileModelGraphql])
  profiles(@Args() pagination: PaginationArgs): Promise<BaseModel[]> {
    return this.profilesService.findAll(pagination);
  }
}
