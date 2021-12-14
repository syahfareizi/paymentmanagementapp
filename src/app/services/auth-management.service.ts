import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { User } from '../models/user';
import {catchError} from 'rxjs/operators';
import { HttpClient,HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthManagementService {
  endpoint:string = 'https://syahfareizi-paymentapi.herokuapp.com/api/authmanagement'
  headers = new HttpHeaders().set('Content-Type','application/json')
  jwtToken:string =''
  jwtRefreshToken:string =''

  constructor(
    private http:HttpClient,
    private router:Router
  ) { }

  //* ADD USER
  addUser(user:User): Observable<any>{
    console.log(user)
    let api=`${this.endpoint}/register`;
    return this.http
                .post(api, user)
                
  }

  //* LOGIN
  loginUser(user:User){
    console.log(user)
    let api=`${this.endpoint}/login`;
    return this.http
                    .post<any>(api, user)
                    .subscribe((res:any)=>{
                      console.log(res)
                      //* ASSIGN JWT KE VARIABLE
                      this.jwtToken = res.token
                      this.jwtRefreshToken = res.refreshToken
                      console.log(this.jwtToken)
                      console.log(this.jwtRefreshToken)
                      this.router.navigate(['/homepage'])
                    })
  }

  //* GET TOKEN
  getToken (){
    return {token:this.jwtToken,refreshToken:this.jwtRefreshToken}
  }

  //* CEK STATUS LOGIN
  get isLoggedIn():boolean{
    return(this.jwtToken!=='')? true:false
  }

  //* ERROR HANDLER
  errorHandler (err: HttpErrorResponse) {
    console.log(err)
    if(err.status < 500)
      return throwError(err.error.errors)
    else
      return throwError(`Server-side error code: ${err.status}\nMessage: ${err.message}`)
  }
  
}
