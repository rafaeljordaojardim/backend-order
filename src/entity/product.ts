import Photo from "./photo";

export default class Product {

  constructor() {
    this.deletedAt = false;
  }
  public id: number;
  public name: string;
  public photoId?: number;
  public price: number;
  public kg: number;
  public stock: number;
  public photoUrl: string;
  public deletedAt?: boolean;
}