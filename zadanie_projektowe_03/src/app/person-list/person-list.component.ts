import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, delay, of, Subscription } from 'rxjs';
import { initialPeople } from 'src/shared/data/data';
import { Person } from 'src/shared/interfaces/person';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css'],
})
export class PersonListComponent implements OnDestroy, OnInit {
  arrayOfPeople: Person[] = [];
  private dataSubscription: Subscription | undefined;
  showOnlyMissing = false;

  toggleRole() {
    const currentRole = localStorage.getItem('role');
    const newRole = currentRole === 'admin' ? 'user' : 'admin';
    localStorage.setItem('role', newRole);
    console.log(`Role updated to: ${newRole}`);
  }
  handleAddPerson(person: Person): void {
    this.arrayOfPeople = [person, ...this.arrayOfPeople.slice()];
  }
  handleDeletePerson(person: Person): void {
    this.arrayOfPeople = this.arrayOfPeople.filter((p) => p.id !== person.id);
  }
  toggleShowOnlyMissing() {
    this.showOnlyMissing = !this.showOnlyMissing;
  }

  ngOnInit(): void {
    // Simulate loading initial data with a delay

    this.dataSubscription = this.loadInitialData().subscribe((data) => {
      this.arrayOfPeople = data;
      console.log(data);
    });
    console.log(this.arrayOfPeople);
  }
  
  private loadInitialData(): Observable<Person[]> {
    // Simulate delay and return an observable
    return of(initialPeople).pipe(delay(2000));
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');

    if (this.dataSubscription) {
      console.log('Unsubscribing from dataSubscription');

      this.dataSubscription.unsubscribe();
    }
  }
}
