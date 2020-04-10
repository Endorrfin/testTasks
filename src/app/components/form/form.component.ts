import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { FormService } from "../../services/form.service";
import { CardModel } from "../../models/cardModel";


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  cardForm: FormGroup;

  card: CardModel = {
    id: '',
    cardName: '',
    cardNumber: '',
    cardDate: '',
    cardCVC: '',
    cardDefault: false
  }

  constructor(public service: FormService) {}

  ngOnInit(): void {
    this.cardForm = new FormGroup({
      cardName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      cardNumber: new FormControl('', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]),
      cardDate: new FormControl('', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]),
      cardCVC: new FormControl(Number, [Validators.required, Validators.minLength(3), Validators.maxLength(3)]),
      cardCheckbox: new FormControl(Boolean,),
    })
  }

  addCard() {
    console.log('add');
  }

  // submit() {
  //   if (this.cardForm.valid) {
  //     console.log('Form input: ', this.cardForm);
  //     const formData = {...this.cardForm.value};
  //
  //     console.log('formData: ', formData);
  //     this.cardForm.reset();
  //   }
  // }

}
