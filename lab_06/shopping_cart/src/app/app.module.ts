import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ShoppingListComponnent } from './shopping-list-componnent/shopping-list-componnent';
import { NgClass } from '@angular/common';

@NgModule({
  declarations: [AppComponent, ShoppingListComponnent],
  imports: [BrowserModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
