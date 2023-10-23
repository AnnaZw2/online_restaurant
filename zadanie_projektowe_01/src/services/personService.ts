import { Person } from "../class/person";

class PersonService {
    private arrayOfPeople: Person[] = []

    public create(person: Person): void{
        this.arrayOfPeople.push(person)
    }

    public read(): Person[]{
       return  this.arrayOfPeople
    }

    
}