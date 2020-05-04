import { Inject, Injectable } from '@nestjs/common';
import { Profile } from '../database/models/profile';
import { ProfileModelGraphql } from './profile.model.graphql';
import { NewProfileData } from './dto/newProfileData.dto';
import { PaginationArgs } from '../base/dto/pagination.dto';

@Injectable()
export class ProfileService {
  constructor(@Inject('Profile') private profileModel: typeof Profile){}

  async getUserProfile(profileId: number) {
    return await this.profileModel.query().findById(profileId)
  }

  async findAll(pagination: PaginationArgs) {
    return await this.profileModel.findAllWithPagination(pagination)
  }

  async createProfile(profile: NewProfileData) {
    return await this.profileModel.query().insert(profile)
  }
}
