import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthManagementService } from './auth-management.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor(
    private authService:AuthManagementService,
    private router:Router
  ){}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    if (!this.authService.isLoggedIn) {
      window.alert("Access denied Please Login");
      this.router.navigate(['login'])
    } else {
      let result: any = await this.authService.refreshToken().toPromise();
      console.log(result)
      console.log(result.success)
      if (!result.success) {
        window.alert("Login Session Expired, Please Login");
        this.router.navigate(['login'])
        }
      }
    return true
  }
  
}
