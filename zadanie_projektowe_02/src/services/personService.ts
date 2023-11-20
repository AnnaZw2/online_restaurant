import { Person } from "../interfaces/person";

export class PersonService {
  private arrayOfPeople: Person[] = [];

  public create(person: Person): void {
    this.arrayOfPeople.push(person);
  }


  public read(): Person[] {
    return this.arrayOfPeople;
  }

  public update(id: number, updatedPerson: Person): void {
    const index: number = this.arrayOfPeople.findIndex(
      (person: Person) => person.id === id
    );
    if (index !== -1) {
      this.arrayOfPeople[index] = updatedPerson;
    }
  }

  public delete(id: number): void {
    this.arrayOfPeople = this.arrayOfPeople.filter(
      (person: Person) => person.id!== id
    );
  }
}
