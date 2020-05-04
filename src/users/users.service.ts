import { Inject, Injectable } from '@nestjs/common';
import { User } from '../database/models/user';
import { Logger } from '@nestjs/common';
import { NewProfileData } from '../profile/dto/newProfileData.dto';
import { ProfileService } from '../profile/profile.service';
import { PaginationArgs } from '../base/dto/pagination.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject('User') private UserModel: typeof User,
    private profileService: ProfileService
  ){}

  async create(userModel, newProfileData: NewProfileData){
    const { id: profileId } = await this.profileService
      .createProfile(newProfileData);

    const { id: userId } = await this.UserModel
      .query()
      .insert({...userModel, profileId});

    return  {id: userId}
  }

  remove(id: string){

  }

  async findAll(pagination: PaginationArgs) {
    return await this.UserModel.findAllWithPagination(pagination);
  }

  async findOneById(id: string) {
    return await this.UserModel.query().findById(id)
  }
}
