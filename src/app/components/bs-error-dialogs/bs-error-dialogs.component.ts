import { Component, OnInit } from '@angular/core';
import {BsErrorDialogsService} from '../../services/bs-error-dialogs.service';

@Component({
  selector: 'app-bs-error-dialogs',
  templateUrl: './bs-error-dialogs.component.html',
  styleUrls: ['./bs-error-dialogs.component.less']
})
export class BsErrorDialogsComponent implements OnInit {

  errorMessage = '';
  open = false;
  constructor(private bsErrorDialogsSvc: BsErrorDialogsService) { }

  ngOnInit() {
    this.bsErrorDialogsSvc.$BsErrorDialogSubjectObs.subscribe(data => {
      this.open = data.open;
      this.errorMessage = data.errorMessage;
    });
  }

  close() {
    this.open = !this.open;
  }
}
