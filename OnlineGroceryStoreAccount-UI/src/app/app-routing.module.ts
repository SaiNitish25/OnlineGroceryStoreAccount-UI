import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerTransactionComponent } from './customer-transaction/customer-transaction.component';
import { CustomersComponent } from './customers/customers.component';
import { HomeComponent } from './home/home.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { ViewAddCustomerComponent } from './view-add-customer/view-add-customer.component';

const routes: Routes = [

  {
    path:'customers',
    component:CustomersComponent
  },
  {
    path:'customers/:id',
    component:ViewAddCustomerComponent
  },
  {
    path:'transaction/:id',
    component:TransactionsComponent
  },
  {
    path:'customertransaction/:id',
    component:CustomerTransactionComponent
  },
  {
    path:'',
    component:HomeComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
