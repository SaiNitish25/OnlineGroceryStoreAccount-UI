import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customers } from '../Models/API-Models/Customers.model';
import { Transactions } from '../Models/API-Models/Transactions.model';
import { AddCustomer } from '../Models/UI-Models/AddCustomer.model';
import { TransactionList } from '../Models/UI-Models/TransactionList.model';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  private baseeApiUrl="https://localhost:44398/Accounts/"

  constructor(private httpclient:HttpClient) { }

  getCustomers():Observable<Customers[]>{
    return this.httpclient.get<Customers[]>(this.baseeApiUrl+"customers");

  }
  getCustomerById(id:string):Observable<Customers>{
    return this.httpclient.get<Customers>(this.baseeApiUrl+'customer/'+id)
  }

  addTransaction(transaction:Transactions):Observable<Transactions>{
    return this.httpclient.post<Transactions>(this.baseeApiUrl+'NewTransaction',transaction)
  }
  
  getTransactions(id:string):Observable<TransactionList[]>{
    return this.httpclient.get<TransactionList[]>(this.baseeApiUrl + 'GetTransactions/' + id);
  }

  getBalance(id:string):Observable<number>{
    return this.httpclient.get<number>(this.baseeApiUrl + 'GetBalance/' + id);
  }
  addCustomer(customer:AddCustomer):Observable<AddCustomer>{
    return this.httpclient.post<AddCustomer>(this.baseeApiUrl+'AddCustomer',customer)
  }
  
  editCustomer(id:string,customer:AddCustomer):Observable<Customers>{
    return this.httpclient.put<Customers>(this.baseeApiUrl+'EditCustomer/'+id,customer)
  }

  
}
