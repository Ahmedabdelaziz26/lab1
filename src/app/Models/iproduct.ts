export interface IProduct {
  id: number;
  Name: string;
  Quantity: number;
  Price: number;
  Img: string;
  CategoryID: number;
  CreatedDate: Date;
  selectedQuantity?: number;
  Descriptions?:string
}

export enum DiscountOffers {
  NoDiscount = 'No Discount',
  TenPercent = '10%',
  FifteenPercent = '15%',
}