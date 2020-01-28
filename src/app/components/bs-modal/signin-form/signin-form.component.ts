import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BasicHttpService } from '../../../services/basic-http.service';
import * as Fingerprint2 from 'fingerprintjs2';
import {BasicUserService} from '../../../services/basic-user.service';
import {IUser, LoginError} from '../../../data-interfaces/user/user-related-interfaces';

@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.less']
})
export class SigninFormComponent implements OnInit {
  signIn: FormGroup;
  error = false;
  success = false;
  message = '';

  constructor(
    private basicHttpSvc: BasicHttpService,
    private basicUserService: BasicUserService
  ) {
    this.signIn = new FormGroup({
      username: new FormControl('', Validators.compose([
        Validators.required
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });
  }
  ngOnInit() {
  }

  get s_un() {
    return this.signIn.controls.username;
  }
  get s_pwd() {
    return this.signIn.controls.password;
  }
  loginUser() {
    // Fingerprint2.get((components) => {
      const userData = {
        userAgent: navigator.userAgent,
        location: {
          timezoneOffset: new Date().getTimezoneOffset(),
          timezone: 'components[9].value',
          longitude: '',
          latitude: ''
        },
        is_registered_in_attempt: 0,
        is_registering: 0
      };
      const data = {...this.signIn.value, ...{userData}};
      this.basicHttpSvc.loginUser(data).subscribe(response => {
        if (response.error) {
          const loginError: LoginError = response.error;
          this.error = true;
          this.message = loginError.errorMessage;
          return !loginError.error;
        } else {
          const user: IUser = response.user;
          this.basicUserService.loginUserToDevice(user);
        }
      }, error => {
        //
      });
    // });
  }

}
