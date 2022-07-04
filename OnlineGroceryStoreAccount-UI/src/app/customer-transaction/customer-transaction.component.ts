import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { TransactionList } from '../Models/UI-Models/TransactionList.model';
import { AccountsService } from '../services/accounts.service';

@Component({
  selector: 'app-customer-transaction',
  templateUrl: './customer-transaction.component.html',
  styleUrls: ['./customer-transaction.component.css']
})
export class CustomerTransactionComponent implements OnInit {
  message="";
  customerId:string|null|undefined;
  id:string='';
  transactions:TransactionList[]=[];
  isClicked:boolean=false;
  balanceAmount=0
  isBalanceClicked:boolean=false;
  CustomerName='';

  dataSource:MatTableDataSource<TransactionList>=new MatTableDataSource<TransactionList>();
  displayedColumns:string[]=['date','trasnactionFor','debit','credit','balanceHistory'];

  constructor(private accountService:AccountsService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params)=>{
          
          this.customerId=params.get('id');
          if(this.customerId)
            this.id=this.customerId;
          this.accountService.getCustomerById(this.id)
          .subscribe(
            (successResponse)=>{
                this.CustomerName=successResponse.customerName;


            }
          )

      }

    );
  }
  getTransactions(){
    this.isClicked=true;
    this.accountService.getTransactions(this.id)
    .subscribe(

      (successResponse)=>{
        this.transactions=successResponse;
        
        this.dataSource=new MatTableDataSource<TransactionList>(this.transactions);
        console.log(this.transactions);
      }
    );

  }

  getBalance(){
    this.isBalanceClicked=true;
    this.accountService.getBalance(this.id)
    .subscribe(

      (successResponse)=>{
        
        console.log(successResponse);
        this.balanceAmount=successResponse;
        this.message="Your Remaing Balance = "
      }
    );
  }

}
