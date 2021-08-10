import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { IUser } from '../models/user';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private loggedUserSubject: BehaviorSubject<IUser>;
  public loggedUser: Observable<IUser>;

  constructor(private http: HttpClient, private router: Router) {
    // get the user from local storage and instintiate the loggedUserSubject
    this.loggedUserSubject = new BehaviorSubject<IUser>(JSON.parse(localStorage.getItem('loggedUser') || null));
    // set the loggedUser to the subject value as an observable
    this.loggedUser = this.loggedUserSubject.asObservable();
  }

  // public login
  login(email: string, password: string) {
    return this.http.post(
      '/api/authenticate',
      { email, password }
    ).pipe(
      map((user: IUser) => {
        // save the user in local storage
        localStorage.setItem('loggedUser', JSON.stringify(user));
        // set loggedUserSubject value to the user
        this.loggedUserSubject.next(user);
        // navigate to the catalog page
        this.router.navigateByUrl('/catalog');
        return user;
      }), catchError(error => {
        console.error({error})
        return throwError( 'Something went wrong!' );
      })
    );
  }

  // public logout
  logout() {
    // remove the user from local storage
    localStorage.removeItem('loggedUser');
    // set loggedUserSubject value to null
    this.loggedUserSubject.next(null);
    // navigate to the home/login page
    this.router.navigate(['/']);

    // in a real world scenario you would also call the server to logout the user
  }

  // returns the current logged user
  public get currentUserValue(): IUser {
    return this.loggedUserSubject.value;
  }
}
