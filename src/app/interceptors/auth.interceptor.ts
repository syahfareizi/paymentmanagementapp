import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpEvent
} from '@angular/common/http';
import { AuthManagementService } from '../services/auth-management.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private authService:AuthManagementService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = this.authService.getToken();
    req = req.clone({
      setHeaders:{
        Authorization : "Bearer " + authToken.token
      }
    })
    return next.handle(req);
  }
}
