import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryEnum } from 'src/app/features/dto/category.enum';

@Component({
  selector: 'app-controls-panel',
  templateUrl: './controls-panel.component.html',
  styleUrls: ['./controls-panel.component.scss'],
})
export class ControlsPanelComponent {
  public filterByCategory: CategoryEnum | null = null;
  public filterByTitle: string | null = null;
  public showOnlyWithLikes: boolean = false;
  public sortBy: string = 'default';
  public categoryOptions: CategoryEnum[] = Object.values(CategoryEnum);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Output() private filtersApplied: EventEmitter<any> = new EventEmitter<any>();
  @Output() private filtersCleared: EventEmitter<void> =
    new EventEmitter<void>();

  public constructor(private router: Router) {}
  public applyFilters(): void {
    this.filtersApplied.emit({
      category: this.filterByCategory,
      title: this.filterByTitle,
      showOnlyWithLikes: this.showOnlyWithLikes,
      sortBy: this.sortBy,
    });
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public toggleShowOnlyWithLikes(event: any): void {
    this.showOnlyWithLikes = event.target?.checked || false;
    this.applyFilters(); // Apply filters immediately when the checkbox state changes
  }
  public navigateToCreateQuiz(): void {
    this.router.navigate(['/create-quiz']);
  }
}
