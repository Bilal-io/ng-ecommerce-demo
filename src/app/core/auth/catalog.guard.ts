import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { INotification } from 'src/app/shared/models/notification';
import { NotificationTypes } from 'src/app/shared/models/types';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Injectable({
  providedIn: 'root'
})
export class CatalogGuard implements CanActivate {
  constructor(
    private auth: AuthenticationService,
    private router: Router,
    private notification: NotificationService
  ) {}
  // implement CanActivate interface for catalg page
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // check if user is logged in
    if (this.auth.currentUserValue) {
      // logged in so redirect allow access
      return true;
    } else {
      // not logged in so prevent access and redirect to login page
      this.router.navigate(['/']);
      // show notification
      this.notification.addNotification(new INotification({title: '401 Error', message: 'You are not logged in', type: NotificationTypes.error}));
      return false;
    }
  }
}
