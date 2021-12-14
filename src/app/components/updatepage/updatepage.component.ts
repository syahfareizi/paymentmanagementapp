import { Component, OnInit } from '@angular/core';
import { PaymentManagementService } from 'src/app/services/payment-management.service';
import { Router,ActivatedRoute} from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Paymentdetails } from 'src/app/models/paymentdetails';

@Component({
  selector: 'app-updatepage',
  templateUrl: './updatepage.component.html',
  styleUrls: ['./updatepage.component.css']
})

export class UpdatepageComponent implements OnInit {

  pageid:number=0
  selectedPayment:Paymentdetails ={id:'',cardOwnerName:'',cardNumber:'',expirationDate:'',securityCode:''}
  constructor(
    private paymentService:PaymentManagementService,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ) {
    this.pageid = this.activatedRoute.snapshot.params.id
  }

  updatePaymentForm = new FormGroup({
    id:new FormControl(),
    cardOwnerName: new FormControl('',[Validators.required,Validators.minLength(5)]),
    cardNumber: new FormControl('',[Validators.required,Validators.minLength(5)]),
    expirationDate: new FormControl('',[Validators.required,Validators.minLength(5)]),
    securityCode: new FormControl(''),
  })

  
  get id(){
    return this.updatePaymentForm.get('id')
  }
  get cardOwnerName(){
    return this.updatePaymentForm.get('cardOwnerName')
  }
  get cardNumber(){
    return this.updatePaymentForm.get('cardNumber')
  }
  get expirationDate(){
    return this.updatePaymentForm.get('expirationDate')
  }
  get securityCode(){
    return this.updatePaymentForm.get('securityCode')
  }

  getSelectedPayment(id:number=this.pageid){
    this.paymentService
    .getSelectedPayment(id)
    .subscribe(data => {
      console.log(data)
      this.selectedPayment=data
      this.id?.setValue(data.id)
      this.cardOwnerName?.setValue(data.cardOwnerName)
      this.cardNumber?.setValue(data.cardNumber)
      this.expirationDate?.setValue(data.expirationDate)
      this.securityCode?.setValue(data.securityCode)
    })
  }
  
  updatePayment(id:number=this.pageid){    
    this.paymentService.updatePayment(this.updatePaymentForm.value,id).subscribe((res)=>{
      if(res.result){
      }
      this.updatePaymentForm.reset()
      this.router.navigate(['/homepage'])
    })
  }

  ngOnInit(): void {
    this.getSelectedPayment()
    console.log(this.pageid)
  }
}

