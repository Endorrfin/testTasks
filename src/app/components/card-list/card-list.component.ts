import { Component, OnInit } from '@angular/core';
import { FormService } from "../../services/form.service";
import { CardModel } from "../../models/cardModel";

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  cards: CardModel[];

  constructor(public service: FormService) {}

  ngOnInit(): void {

    this.cards = this.service.getCards();
  }

}
