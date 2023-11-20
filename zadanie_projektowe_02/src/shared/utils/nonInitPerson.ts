import { Gender } from "../enums/custom-enums";
import { Person, generateUUID } from "../interfaces/person";

export const nonInitializedPerson:Person = {
    id:  generateUUID(),
    name: '',
    surname: '',
    age: 0,
    gender: Gender.NOT_SET, 
    city: '',
    lastTimeSeen: new Date(),
    stillMissing: undefined,
  }