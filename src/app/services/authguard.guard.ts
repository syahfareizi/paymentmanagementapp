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

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!this.authService.isLoggedIn) {
        window.alert("Access Not Allowed")
        this.router.navigate(['/login'])}
      // }else {
      //   let result: any = await this.authService.refreshToken().toPromise();
      //   console.log(result.result.success);
      //   if (!result.result.success) {
      //     window.alert("Access denied");
      //     this.router.navigate(['login'])
      //   }
      // }
      return true
    }
  
  
}
