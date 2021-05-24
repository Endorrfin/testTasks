import { Component, OnInit, Input } from '@angular/core';
import { CardModel } from "../../models/cardModel";
import { cardsList } from "../shared/cardsList";

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {
  @Input() data: CardModel;

  constructor() { }

  ngOnInit(): void {
  }

}
