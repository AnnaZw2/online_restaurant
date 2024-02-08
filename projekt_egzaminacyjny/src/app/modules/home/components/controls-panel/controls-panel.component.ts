import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryEnum } from 'src/app/features/dto/category.enum';

@Component({
  selector: 'app-controls-panel',
  templateUrl: './controls-panel.component.html',
  styleUrls: ['./controls-panel.component.scss']
})
export class ControlsPanelComponent {
  filterByCategory: CategoryEnum | null = null;
  filterByTitle: string | null = null;
  showOnlyWithLikes = false;
  sortBy = 'default';
  categoryOptions: CategoryEnum[] = Object.values(CategoryEnum);
  @Output() filtersApplied: EventEmitter<any> = new EventEmitter<any>();
  @Output() filtersCleared: EventEmitter<void> = new EventEmitter<void>();

  

  constructor(private router:Router) {
   }
   applyFilters() {
    this.filtersApplied.emit({
      category: this.filterByCategory,
      title: this.filterByTitle,
      showOnlyWithLikes: this.showOnlyWithLikes,
      sortBy: this.sortBy,
    });
console.log("sort!!!!!!")
  }
  toggleShowOnlyWithLikes(event: any) {

    this.showOnlyWithLikes = event.target?.checked || false;
    console.log("showOnlyWithLikes",this.showOnlyWithLikes)
    this.applyFilters(); // Apply filters immediately when the checkbox state changes
  }
   navigateToCreateQuiz() {
    this.router.navigate(['/create-quiz']);
}

}
