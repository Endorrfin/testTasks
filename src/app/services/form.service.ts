import { Injectable } from '@angular/core';
import { CardModel } from '../models/cardModel';
import { cardsList } from '../components/shared/cardsList';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  cards: CardModel[] = cardsList;



  constructor() {}

  getCards() {
    return this.cards;
  }


  addCard() {
    const newCard = {
      id: String(Date.now()),
      cardName: this.cards,
      cardNumber: this.cards,
      cardDate: this.cards,
      cardCVC: this.cards,
      cardDefault: false
    };
    this.cards.unshift(newCard);
  }

}

