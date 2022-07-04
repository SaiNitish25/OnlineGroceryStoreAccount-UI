import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Customers } from '../Models/API-Models/Customers.model';
import { AccountsService } from '../services/accounts.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})

export class CustomersComponent implements OnInit {

  filterCustomer='';
  customers:Customers[]=[];
  dataSource:MatTableDataSource<Customers>=new MatTableDataSource<Customers>();
  displayedColumns:string[]=['CustomerName','Mobile','Address','edit','add','view'];
  constructor(private accountsService:AccountsService) { }

  ngOnInit(): void {

    this.accountsService.getCustomers()
    .subscribe(
      (successResponse)=>{
          
          this.customers=successResponse;
          this.dataSource=new MatTableDataSource<Customers>(this.customers);
          console.log(this.customers);
      },
      (errorResponse)=>{
        console.log(errorResponse);
      }

    );
  }
  searchCustomers(){
    this.dataSource.filter=this.filterCustomer.toLowerCase();
  }

}
