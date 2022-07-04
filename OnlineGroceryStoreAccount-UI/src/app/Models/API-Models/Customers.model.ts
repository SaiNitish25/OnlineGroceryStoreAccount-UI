import { Transactions } from "./Transactions.model";


export interface Customers{
    customerId:string;
    customerName:string;
    address:string;
    moblie:number;
    Transactions:Transactions;

}