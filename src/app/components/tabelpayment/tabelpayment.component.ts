import { Component, OnInit } from '@angular/core';
import { PaymentManagementService } from 'src/app/services/payment-management.service';
import { Router } from '@angular/router';
import { Paymentdetails } from 'src/app/models/paymentdetails';


@Component({
  selector: 'app-tabelpayment',
  templateUrl: './tabelpayment.component.html',
  styleUrls: ['./tabelpayment.component.css']
})
export class TabelpaymentComponent implements OnInit {

  allPayments:Paymentdetails[]=[]
  constructor(
    private paymentService:PaymentManagementService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getAllPayments()
  }


  getAllPayments () {
    this.paymentService
    .getAllPayments()
    .subscribe(data => {
      this.allPayments = data
      console.log(data)
    })
  }

  confirmDelete(id: string) {
    if(confirm(`Are you sure you want to delete Payment Detail ?`))
      this.deletePayment(id)
  }
  
  deletePayment(id:string){
    this.paymentService.deletePayment(id).subscribe(data =>{
      this.allPayments= data
      console.log(data)
      this.getAllPayments()
    })
  }
}
