import { BuyPay } from "./buy-pay";

export interface BuyPayResponse {
    Success: boolean;
    Message?: string;
    Data:    BuyPay;
}
