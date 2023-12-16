import { Gender } from '../enums/custom-enums';
import { Address } from './address';
import { v4 as uuidv4 } from 'uuid';

export interface Person {
  id: string;
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

export function generateUUID(): string {
  return uuidv4();
}