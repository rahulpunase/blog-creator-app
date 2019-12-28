import {Component, ElementRef, OnInit, ViewChildren} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICategories } from 'src/app/data-interfaces/categories.interface';
import { BsModalService } from '../../services/bs-modal.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.less']
})
export class StartComponent implements OnInit {

  categories: ICategories = null;
  selectedPreferences = [];

  constructor(private activateRoute: ActivatedRoute,
              private bsModalSvc: BsModalService) { }

  ngOnInit() {
    this.activateRoute.data.forEach(data => {
      this.categories = (data.categories) ? data.categories : null;
    });
  }

  openSignUpModel() {
    this.bsModalSvc.open(this.bsModalSvc.Blocks.SIGNUP);
    this.bsModalSvc.setPreferences(this.selectedPreferences);
  }

  addToPreferences(selectedPrefs: HTMLInputElement) {
    if (selectedPrefs.checked) {
      this.selectedPreferences.push(selectedPrefs.value);
    } else {
      this.selectedPreferences = this.selectedPreferences.filter(pref => pref !== selectedPrefs.value);
    }
  }

}
