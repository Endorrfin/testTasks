import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { FormService } from "../../services/form.service";
import { CardModel } from "../../models/cardModel";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"],
})
export class FormComponent implements OnInit {
  cardForm: FormGroup;

  constructor(public service: FormService) {}

  ngOnInit(): void {
    this.cardForm = new FormGroup({
      cardName: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
      ]),
      cardNumber: new FormControl("", [
        Validators.required,
        Validators.minLength(16),
        Validators.maxLength(16),
      ]),
      cardDate: new FormControl("", [
        Validators.required,
        Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/),
      ]),
      cardCVC: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(3),
      ]),
      cardDefault: new FormControl(false, Validators.pattern("true")),
    });
  }

  addCard() {
    const cardData = this.cardForm.value;
    this.service.addCard(cardData);
  }
}


/*
  Якщо ти використовуєш реактивні форми (FormGroup) - то [(ngModel)] вже використовувати не можна - це два різні підходи до реалізації форми

  [disabled]="!card.cardName || !card.cardNumber || !card.cardDate || !card.cardCVC" - замінив на [disabled]="cardForm.invalid"

  cardForm - елементи форми рекомендую називати так як елементи інтерфейсу (якшо ворма відповідає за створення).
  Тому що значення форми не потребуватиме додаткови махінацій з приведенням даних до необхідного вигляду.

  new FormControl(Number), new FormControl(Boolean) - Ти вказуєш значення яке буде в контролі не правильно,
  Потрібно new FormControl(null), new FormControl(false), new FormControl('') ...


  addCard - добавив реалізацію збереження карти


*/
