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
  // jwtToken:string =''
  // jwtRefreshToken:string =''

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
                      localStorage.setItem('token',res.token) 
                      localStorage.setItem('refreshToken',res.refreshToken)
                      this.router.navigate(['/homepage'])
                      console.log(localStorage)
                    })
  }
  //* GET TOKEN
  getToken (){
    return {token:localStorage.getItem('token'),refreshToken:localStorage.getItem('refreshToken')}
  }

  //* CEK STATUS LOGIN
  get isLoggedIn():boolean{
    const token = localStorage.getItem('token')
    return(token!==null)? true:false
  }

  //* ERROR HANDLER
  errorHandler (err: HttpErrorResponse) {
    console.log(err)
    if(err.status < 500)
      return throwError(err.error.errors)
    else
      return throwError(`Server-side error code: ${err.status}\nMessage: ${err.message}`)
  }

  //* Refresh Token
  refreshToken() {
    const token = localStorage.getItem('token');
    const refreshToken = localStorage.getItem('refreshToken');
    return this.http
      .post(`${this.endpoint}/refreshtoken`, { token, refreshToken })
      .pipe(catchError(this.handleError));
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
}
