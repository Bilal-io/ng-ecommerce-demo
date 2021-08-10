import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { INotification } from 'src/app/shared/models/notification';
import { NotificationTypes } from 'src/app/shared/models/types';
import { IUser } from 'src/app/shared/models/user';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  loginForm: FormGroup;
  isLoggingIn = false;

  constructor(
    private auth: AuthenticationService,
    private notification: NotificationService
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[_A-Za-z0-9-\+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/)
      ]),
      password: new FormControl('', [Validators.required]),
    });
  }

  login(): void {
    this.isLoggingIn = true;
    this.auth.login(this.loginForm.controls.email.value, this.loginForm.controls.password.value)
    .subscribe((user: IUser) => {
    }, (error) => {
      console.error(error)
      // reset password field for security reasons
      this.loginForm.controls.password.setValue('');
      // Set error messgage
      this.notification.addNotification(new INotification({title: '401 Unauthorized', message: "Email or password incorrect", type: NotificationTypes.error}));

    }).add(() => {
      // set loading to false in both cases success or failure
      this.isLoggingIn = false;
    });;
  }
  // get form control
  get fc() { return this.loginForm.controls; }


}
