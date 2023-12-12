import { Injectable } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor(private fb: FormBuilder) {}

  createUsersForm(): FormGroup {
    return new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      addresses: new FormArray([]),
    });
  }
  addAddress(form: FormGroup): void {
    const addresses = form.get('addresses') as any;
    addresses.push();
  }

  removeAddress(form: FormGroup, index: number): void {
    const addresses = form.get('addresses') as any;
    addresses.removeAt(index);
  }
}
