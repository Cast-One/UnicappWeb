export interface Product {
  code: string;
  name: string;
  stock: number;
  purchase_price: number;
  sale_price: number;
  image: string;
  selected?: boolean;
  quantity?: number;
}
