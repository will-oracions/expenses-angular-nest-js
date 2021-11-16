import { BaseModel } from '@Models/base.model';
import { ExpenseModel } from '@Models/expenses/expense.model';
import { DeviseInterface } from '../devises/devise.model';

export class BesoinModel extends BaseModel {
  constructor(
    public Name?: string,
    public Desc?: string,
    public Amount?: number,
    public Devise?: DeviseInterface,
    public Expense?: ExpenseModel,
    public Status?: BesoinStatus,
    public Priority?: BesoinPriority
  ) {
    super();
  }
}

export enum BesoinStatus {
  PENDING = 1,
  CANCELED = 2,
  COMPLETED = 3,
}

export enum BesoinPriority {
  PRIMARY = 1,
  SECONDARY = 2,
}
