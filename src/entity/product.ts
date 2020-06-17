import Photo from "./photo";

export default class Product {

  constructor() {}
  public id: number;
  public name: string;
  public photoId?: number;
  public price: number;
  public kg: number;
  public stock: number;
  public photoUrl: string;
}