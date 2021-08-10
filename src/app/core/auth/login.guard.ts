import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private auth: AuthenticationService, private router: Router) {}

  // implement CanActivate interface for login page
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // check if user is logged in
    if (this.auth.currentUserValue) {
      // logged in, prevent access and redirect to catalog page
      this.router.navigate(['/catalog']);
      return false;
    } else {
      // not logged in so allow navigation
      return true;
    }
  }
}
