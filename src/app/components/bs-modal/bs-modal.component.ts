import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {BsModalService} from '../../services/bs-modal.service';

@Component({
  selector: 'app-bs-modal',
  templateUrl: './bs-modal.component.html',
  styleUrls: ['./bs-modal.component.less']
})
export class BsModalComponent implements OnInit {

  id = '';
  prefs = [];
  constructor(private bsModalSvc: BsModalService) {
  }

  ngOnInit() {
    this.id = this.bsModalSvc.modelId;
    this.prefs = this.bsModalSvc.savedPreferences;
  }

}
