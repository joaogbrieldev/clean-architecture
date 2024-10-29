
export interface IOrder {
  id: string;
  customerId: string;
  items: {
    id: string;
    name: string;
    productId: string;
    quantity:  number;
    price: number;
  }[];
}