import { Buy } from "./buy";

export interface BuyUnpaid {
    total_remaining_amount: number;
    number_buys:            number;
    buys:                   Buy[];
}
