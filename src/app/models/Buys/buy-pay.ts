import { Buy } from "./buy";

export interface BuyPay {
    total_buys_paid:    number;
    paid_buys:          Buy[];
    partially_paid_buy: null;
}
