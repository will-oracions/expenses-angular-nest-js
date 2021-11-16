import { BaseModel } from '@Models/base.model';
import { DeviseInterface } from '../devises/devise.model';

export class BesoinModel extends BaseModel {
  constructor(
    public Name: string,
    public Desc: string,
    public amount: number,
    public devise: DeviseInterface
  ) {
    super();
  }
}
