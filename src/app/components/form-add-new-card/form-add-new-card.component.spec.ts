import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddNewCardComponent } from './form-add-new-card.component';

describe('FormAddNewCardComponent', () => {
  let component: FormAddNewCardComponent;
  let fixture: ComponentFixture<FormAddNewCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAddNewCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddNewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
