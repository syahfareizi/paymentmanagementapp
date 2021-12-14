import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentManagementService } from 'src/app/services/payment-management.service';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { TabelpaymentComponent } from '../tabelpayment/tabelpayment.component';

@Component({
  selector: 'app-formpayment',
  templateUrl: './formpayment.component.html',
  styleUrls: ['./formpayment.component.css']
})
export class FormpaymentComponent implements OnInit {

  constructor(
    private paymentdetailService:PaymentManagementService,
    private router:Router
  ) { }

  addPaymentForm = new FormGroup({
    cardOwnerName: new FormControl('',[Validators.required,Validators.minLength(5)]),
    cardNumber: new FormControl('',[Validators.required,Validators.minLength(5)]),
    expirationDate: new FormControl('',[Validators.required,Validators.minLength(5)]),
    securityCode: new FormControl('',[Validators.required,Validators.minLength(5)]),
  })

  get cardOwnerName(){
    return this.addPaymentForm.get('cardOwnerName')
  }
  get cardNumber(){
    return this.addPaymentForm.get('cardNumber')
  }
  get expirationDate(){
    return this.addPaymentForm.get('expirationDate')
  }
  get securityCode(){
    return this.addPaymentForm.get('securityCode')
  }

  ngOnInit(): void {
  }

  addPayment(){
    this.paymentdetailService.addPayment(this.addPaymentForm.value).subscribe((res)=>{
      if(res.result){
      }
      this.addPaymentForm.reset()
      location.reload()
    })
  }
}
