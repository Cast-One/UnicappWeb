import { Product } from "../Product/product";

export interface Buy {
    date_purchase:    string;
    amount:           number;
    remaining_amount: number;
    buy_products:     Product[];
}
