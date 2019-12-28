import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BsErrorDialogsService {
  private BsErrorDialogSubject = new BehaviorSubject({
    open: false,
    errorMessage: ''
  });
  public $BsErrorDialogSubjectObs = this.BsErrorDialogSubject.asObservable()

  constructor() { }
  openErrorDialog(data) {
    this.BsErrorDialogSubject.next(data);
  }
}
