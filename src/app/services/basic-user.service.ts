import { Injectable } from '@angular/core';
import { IUser } from '../data-interfaces/user/user-related-interfaces';
import { Router } from '@angular/router';
import {BsModalService} from './bs-modal.service';

@Injectable()
export class BasicUserService {

  constructor(private route: Router,
              private bsModalService: BsModalService) { }

  loginUserToDevice(user: IUser) {
    this.bsModalService.close();
    // save token in local storage
    localStorage.setItem('AUTH_TOKEN', user.token);
    // navigate the user to home page
    this.route.navigateByUrl('/home');
  }
}
