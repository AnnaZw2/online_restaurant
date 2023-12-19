import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingService } from './shopping.service';
import { FormsModule } from '@angular/forms';
import { AlertComponent } from './alert/alert.component';
import { ItemFormComponent } from './item-form/item-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    ShoppingListComponent,
    AlertComponent,
    ItemFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
