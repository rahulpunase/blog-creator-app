import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BsModalService {

  modelId = 'large-modal-opener';
  modelIdClose = 'large-modal-opener-closer'
  Blocks = {
   SIGNUP: 'SignUp',
   SIGNIN: 'SignIn',
  };
  activated = this.Blocks.SIGNUP;
  savedPreferences = [];
  private preferencesSubject = new BehaviorSubject([]);
  $preferencesSubjectObs = this.preferencesSubject.asObservable();
  /*
  * Constructor
  * */
  constructor() { }
  open(toActive) {
    this.activated = toActive;
    document.getElementById(this.modelId).click();
  }
  openWithPrefs(toActive, prefs) {
    this.open(toActive);
    this.savedPreferences = prefs;
  }
  setPreferences(prefs) {
    this.preferencesSubject.next(prefs);
  }
  close() {
    document.getElementById(this.modelIdClose).click();
  }
}
