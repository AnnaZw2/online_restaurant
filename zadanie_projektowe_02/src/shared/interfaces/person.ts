import { Gender } from '../enums/custom-enums';
import { Address } from './address';
import { v4 as uuidv4 } from 'uuid';

export interface Person {
  id: string;
  name: string;
  surname: string;
  age: number;
  gender: Gender;
  city: string;
  lastTimeSeen: Date;
  stillMissing: boolean | undefined;

}

export function generateUUID(): string {
  return uuidv4();
}
