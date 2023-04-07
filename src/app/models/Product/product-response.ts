import { Product } from './product';
export interface ProductResponse {
    Success: boolean;
    Message: null;
    Data:  Product[];
}