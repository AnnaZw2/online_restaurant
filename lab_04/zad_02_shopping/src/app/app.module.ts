import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductDisplayComponent } from './product-item/product-display/product-display.component';
import { AlertComponent } from './alert/alert.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ProductItemComponent,
    ProductDisplayComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
