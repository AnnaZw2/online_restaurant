import { Person } from "./class/person";
import { Gender } from "./enums/custom-enums";
import { PersonService } from "./services/personService";

const person1: Person = new Person(
  1,
  "John",
  "Doe",
  30,
  Gender.MALE,
  true,
  false,
  {
    street: "123 Main St",
    apartmentNumer: "Apt 1",
    zipCode: "12345",
    city: "Sample City",
    country: "USA",
  },
  {
    email: "john@example.com",
    phone: "123-456-7890",
  }
);

const person2: Person = new Person(
  2,
  "Alice",
  "Smith",
  28,
  Gender.FEMALE,
  true,
  true,
  {
    street: "456 Elm St",
    apartmentNumer: "Apt 2",
    zipCode: "54321",
    city: "Another City",
    country: "Canada",
  },
  {
    email: "alice@example.com",
    phone: "987-654-3210",
  }
);

const person3: Person = new Person(
  3,
  "Bob",
  "Johnson",
  35,
  Gender.MALE,
  false,
  false,
  {
    street: "789 Oak St",
    apartmentNumer: "Apt 3",
    zipCode: "67890",
    city: "Cityville",
    country: "UK",
  },
  {
    email: "bob@example.com",
    phone: "456-789-1234",
  }
);

const person4: Person= new Person(
  4,
  "Eve",
  "Brown",
  29,
  Gender.FEMALE,
  true,
  true,
  {
    street: "101 Pine St",
    apartmentNumer: "Apt 4",
    zipCode: "11111",
    city: "Newtown",
    country: "Australia",
  },
  {
    email: "eve@example.com",
    phone: "222-333-4444",
  }
);

const person5: Person = new Person(
  5,
  "Charlie",
  "Williams",
  40,
  Gender.MALE,
  true,
  true,
  {
    street: "222 Cedar St",
    apartmentNumer: "Apt 5",
    zipCode: "55555",
    city: "Small Town",
    country: "USA",
  },
  {
    email: "charlie@example.com",
    phone: "888-777-6666",
  }
);

const crud: PersonService = new PersonService();
crud.create(person1);
crud.create(person2);
crud.create(person3);
crud.create(person4);
crud.create(person5);

console.log("---------- reading -----------------");
console.log(crud.read());

console.log("------------- deleting person 2-------------");
crud.delete(2);
console.log(crud.read());

console.log("---------- update person 1 ------------");

const updatedPerson: Person = new Person(
  6,
  "Anna",
  "Zwiefka",
  21,
  Gender.FEMALE,
  true,
  false,
  {
    street: "123 Main St",
    apartmentNumer: "Apt 1",
    zipCode: "12345",
    city: "Sample City",
    country: "Poland",
  },
  {
    email: "anna@example.com",
    phone: "000-222-333",
  }
);

crud.update(1, updatedPerson);
console.log(crud.read());

console.log("---------- delete person 2 and person 3 ------------");
crud.delete(2);
crud.delete(3);
console.log(crud.read());