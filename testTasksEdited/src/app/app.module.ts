import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { FormService } from "./services/form.service";

import { AppComponent } from "./app.component";
import { CardsComponent } from "./components/cards/cards.component";
import { FormComponent } from "./components/form/form.component";
import { CardItemComponent } from "./components/card-item/card-item.component";
import { CardListComponent } from "./components/card-list/card-list.component";

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    FormComponent,
    CardItemComponent,
    CardListComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
