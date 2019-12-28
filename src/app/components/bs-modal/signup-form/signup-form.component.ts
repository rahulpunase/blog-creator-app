import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BsModalService} from '../../../services/bs-modal.service';
import {BasicHttpService} from '../../../services/basic-http.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.less']
})
export class SignupFormComponent implements OnInit {

  signUp: FormGroup;
  preferences = [];
  constructor(
    private basicHttpSvc: BasicHttpService,
    private bsModalSvc: BsModalService) {
    /*
    * Init form
    * */
    this.signUp = new FormGroup({
      first_name: new FormControl('', Validators.compose([
        Validators.required
      ])),
      last_name: new FormControl('', Validators.compose([
        Validators.required
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
      ])),
      username: new FormControl('', Validators.compose([
        Validators.required
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });
  }

  ngOnInit() {
    this.bsModalSvc.$preferencesSubjectObs.subscribe(prefs => this.preferences = prefs);
  }

  get s_fn() {
    return this.signUp.controls.first_name;
  }
  get s_ln() {
    return this.signUp.controls.last_name;
  }
  get s_em() {
    return this.signUp.controls.email;
  }
  get s_un() {
    return this.signUp.controls.username;
  }
  get s_pwd() {
    return this.signUp.controls.password;
  }

  registerUser() {
    this.basicHttpSvc.registerUser({...this.signUp.value, ...{preferences: this.preferences}})
      .subscribe(response => {
      console.log('If User is registered', response);
    });
  }
}
