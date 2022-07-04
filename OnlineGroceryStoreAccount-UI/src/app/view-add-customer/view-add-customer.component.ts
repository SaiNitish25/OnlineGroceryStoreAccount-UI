import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Customers } from '../Models/API-Models/Customers.model';
import { AddCustomer } from '../Models/UI-Models/AddCustomer.model';
import { AccountsService } from '../services/accounts.service';

@Component({
  selector: 'app-view-add-customer',
  templateUrl: './view-add-customer.component.html',
  styleUrls: ['./view-add-customer.component.css']
})
export class ViewAddCustomerComponent implements OnInit {
  operation:string|null|undefined;
  header:string='';
  /*customer:Customers={

    customerId:'',
    customerName:'',
    moblie:0,
    address:'',
    Transactions:{
      
      trasnactionFor:'',
      
      debit:0,
      credit:0,
     customerId:''
      
    }
  };*/
  cutomerId='';
  customer:AddCustomer={
    customerName:'',
    moblie:0,
    address:'',
  }

  constructor(private accountsService:AccountsService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(

      (params)=>{
        this.operation=params.get('id');
        if(this.operation){
          if(this.operation.toLowerCase()=='add'){
            this.header="Add customer"
          }
          else{
            this.header="Edit customer";
            this.cutomerId=this.operation;

            this.accountsService.getCustomerById(this.operation)
            .subscribe(
               (successResponse)=>{
                console.log(successResponse);
                this.customer=successResponse;
                console.log(this.customer);
               }

            );
          }



        }
        


      }


    );

  }

  AddCustomer(){
    this.accountsService.addCustomer(this.customer)
    .subscribe(

      (successResponse)=>{
        console.log(successResponse);
        Swal.fire("Thank you !!","Customer Added Successfully","success").then(

          ()=>{
            setTimeout(()=>{
              this.router.navigateByUrl('customers');
            },2000);
          }
        );
      }
    );
  }

  EditCustomer(){
    
    this.accountsService.editCustomer(this.cutomerId,this.customer)
    .subscribe(

      (successResponse)=>{
        console.log(successResponse);
        Swal.fire("Thank you !!","Customer Updated Successfully","success").then(

          ()=>{
            setTimeout(()=>{
              this.router.navigateByUrl('customers');
            },2000);
          }
        );
      }
    );
  }

}
