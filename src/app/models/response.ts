import { Product } from './product';
export interface ResponseProducts {
    Success: boolean;
    Message: null;
    Data:  Product[];
}