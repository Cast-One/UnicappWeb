import { Product } from "./product";
import { ProductRequest } from './product-request';

export interface BuyRequest {
    client_code: number | string;
    payment:     number;
    products:    ProductRequest[];
}
