import { ShoppingItem } from "../interfaces/Shoppinng.interface";
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
  })
  
export class ShoppingListService {
    private itemsSubject = new BehaviorSubject<ShoppingItem[]>([]);
    items$: Observable<ShoppingItem[]> = this.itemsSubject.asObservable();
  
    addItem(item: ShoppingItem): void {
      const items = this.itemsSubject.value;
      if (item.name.trim() === '' || items.some(existingItem => existingItem.name === item.name)) {
        // Show alert here
        return;
      }
  
      this.itemsSubject.next([...items, item]);
    }
  
    removeItem(item: ShoppingItem): void {
      this.itemsSubject.next(this.itemsSubject.value.filter(existingItem => existingItem !== item));
    }
  
    toggleBoughtStatus(item: ShoppingItem): void {
      const updatedItems = this.itemsSubject.value.map(existingItem => {
        if (existingItem === item) {
          return { ...existingItem, bought: !existingItem.bought };
        }
        return existingItem;
      });
  
      this.itemsSubject.next(updatedItems);
    }
  
    removeBoughtItems(): void {
      const updatedItems = this.itemsSubject.value.filter(item => !item.bought);
      this.itemsSubject.next(updatedItems);
    }
  }
  