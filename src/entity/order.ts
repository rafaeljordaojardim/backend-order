export default class Order {

  constructor() {}
  public id: number;
  public customerId: number;
  public createdAt: string;
  public accepted?: boolean;
}