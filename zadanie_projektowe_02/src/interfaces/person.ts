import { Gender } from '../enums/custom-enums';
import { Address } from './address';

export interface Person {
  id: number;
  name: string;
  surname: string;
  age: number;
  gender: Gender;
  employed: boolean;
  studentStatus: boolean;
  address: Address;
  lastTimeSeen: Date;
  contact: {
    email: string;
    phone: string;
  };
}
