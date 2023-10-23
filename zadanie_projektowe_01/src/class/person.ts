import { Gender } from "../enums/custom-enums";
import { Address } from "../types/address";

export class Person {
  private id: number;
  private name: string;
  private surname: string;
  private age: number;
  private gender: Gender;
  private employed: boolean;
  private studentStatus: boolean;
  private address: Address;
  private contact: {
    email: string;
    phone: string;
  };
  public constructor(
    id: number,
    name: string,
    surname: string,
    age: number,
    gender: Gender,
    employed: boolean,
    studentStatus: boolean,
    address: Address,
    contact: { email: string; phone: string }
  ) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.gender = gender;
    this.employed = employed;
    this.studentStatus = studentStatus;
    this.address = address;
    this.contact = contact;
  }
  public getId(): number {
    return this.id;
  }

  public setId(id: number): void {
    this.id = id;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getSurname(): string {
    return this.surname;
  }
  public setSurname(surname: string): void {
    this.surname = surname;
  }

  public getAge(): number {
    return this.age;
  }

  public setAge(age: number): void {
    this.age = age;
  }
  public getGender(): Gender {
    return this.gender;
  }
  public setGender(gender: Gender): void {
    this.gender = gender;
  }

  public getEmployed(): boolean {
    return this.employed;
  }

  public setEmployed(employed: boolean): void {
    this.employed = employed;
  }
  public setStudentStatus(studentStatus: boolean): void {
    this.studentStatus = studentStatus;
  }

  public getStudentStatus(): boolean {
    return this.studentStatus;
  }

  public getAddress(): Address {
    return this.address;
  }

  public setAddress(address: Address): void {
    this.address = address;
  }

  public getContact(): { email: string; phone: string } {
    return this.contact;
  }

  public setContact(contact: { email: string; phone: string }): void {
    this.contact = contact;
  }
}
