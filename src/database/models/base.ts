import { Model } from 'objection';

export class BaseModel extends Model {
  id: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;

  $beforeInsert() {
    this.createdAt = new Date().toISOString();
  }

  $beforeUpdate() {
    this.updatedAt = new Date().toISOString();
  }

  static async findAllWithPagination({page = 10, perPage = 20}){
    const resultPage = await this.query().page(page, perPage);
    return resultPage.results;
  }
}
