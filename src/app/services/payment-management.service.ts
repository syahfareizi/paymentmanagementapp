import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Paymentdetails } from '../models/paymentdetails';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaymentManagementService {
  endpoint:string = 'https://syahfareizi-paymentapi.herokuapp.com/api/paymentdetails'

  constructor(
    private http:HttpClient,
    private router:Router
  ) { }

  //* ADD Payment Details
  addPayment(paymentdetails:Paymentdetails): Observable<any>{
    console.log(paymentdetails)
    let api=`${this.endpoint}`;
    return this.http
                .post(api, paymentdetails)
                
  }

  //* GET All Payment Details
  getAllPayments (): Observable<any> {
    return (
      this.http
      .get(`${this.endpoint}`)
      .pipe( catchError(this.handleError) )
    )
  }

   //* ERROR HANDLER
   handleError(error:HttpErrorResponse){
    let msg =''
    if ( error.error instanceof ErrorEvent){
      msg = error.error.message
    } else {
      msg =`Error code :${error.status}\n Message: ${error.message}`
    }
    return throwError(msg)
  }

  //* DELETE Payment Details By Id
  deletePayment(id: string): Observable<any> {
    return (
      this.http
      .delete(`${this.endpoint}/${id}`)
      .pipe( catchError(this.handleError) )
    )
  }

    //* UPDATE EMPLOYEE BY ID
    updatePayment(payment: Paymentdetails,id:number): Observable<any> {
      console.log(payment)
      console.log(id)
      return (
        this.http
        .put(`${this.endpoint}/${id}`, payment)
        .pipe( catchError(this.handleError) )
      )
    }

    //* GET Selected Payment
    getSelectedPayment (id:number): Observable<any> {
      return (
        this.http
        .get(`${this.endpoint}/${id}`)
        .pipe( catchError(this.handleError) )
      )
    }
}
