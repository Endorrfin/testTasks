import { Injectable } from "@angular/core";
import { CardModel } from "../models/cardModel";
import { cardsList } from "../components/shared/cardsList";

@Injectable({
  providedIn: "root",
})
export class FormService {
  cards: CardModel[] = cardsList;

  constructor() {}

  getCards() {
    return this.cards;
  }

  addCard(newCard: CardModel) {
    newCard.id = Date.now();
    this.cards.push(newCard);
  }
}

/*
  addCard - в метод сервісу треба передавати те що ти будеш зберігати і добавляєш в масив методом push
  з того що було написано - я так і не зрозумів що ти хотів цим реалізувати)
*/
