import { ProductRequest } from '../Product/product-request';

export interface BuyRequest {
    client_code: number | string;
    payment:     number;
    products:    ProductRequest[];
}
