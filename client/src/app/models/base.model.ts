export class BaseModel {
  public constructor(
    public Id: string = '123',
    public CreatedAt?: string,
    public UpdatedAt?: string
  ) {}
}
