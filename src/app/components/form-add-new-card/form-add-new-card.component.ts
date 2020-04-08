import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'form-add-new-card',
  templateUrl: './form-add-new-card.component.html',
  styleUrls: ['./form-add-new-card.component.scss']
})
export class FormAddNewCardComponent implements OnInit {
  cardForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.cardForm = new FormGroup({
      cardName: new FormControl('', Validators.required),
      cardNumber: new FormControl(null,[Validators.required, Validators.minLength(16), Validators.maxLength(16)]),
      // cardNumber: new FormControl(null,[Validators.required, Validators.min(16), Validators.max(16), Validators.pattern(/^[0-9]+(?!.)/)]),
      cardDate: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(4)]),
      cardCVC: new FormControl(Number, [Validators.required, Validators.minLength(3), Validators.maxLength(3)]),
      cardCheckbox: new FormControl(Boolean,),
    })
  }

  submit() {
    if (this.cardForm.valid) {
      console.log('Form data: ', this.cardForm);
      const formData = {...this.cardForm.value};

      console.log('formData: ', formData);
      this.cardForm.reset();

    }
  }

}
