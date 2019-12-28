import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BsErrorDialogsComponent } from './bs-error-dialogs.component';

describe('BsErrorDialogsComponent', () => {
  let component: BsErrorDialogsComponent;
  let fixture: ComponentFixture<BsErrorDialogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BsErrorDialogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BsErrorDialogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
