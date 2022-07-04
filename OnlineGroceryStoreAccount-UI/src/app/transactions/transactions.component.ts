import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Transactions } from '../Models/API-Models/Transactions.model';
import { AccountsService } from '../services/accounts.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  transaction:Transactions={
    trasnactionFor:'',
    
    debit:0,
    credit:0,
    
    customerId:''
  };
  custId: string |null |undefined;

  constructor(private accountService:AccountsService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params)=>{
        this.custId=params.get('id')
        if(this.custId){
          this.transaction.customerId=this.custId;
        }
      }
    );
  }

  onSubmit(){
    console.log(this.transaction);
    this.accountService.addTransaction(this.transaction)
    .subscribe(

      (successResponse)=>{
          console.log(successResponse);
          Swal.fire("Thank You!","You are adding transaction","success");
      }
    );

  }

}
