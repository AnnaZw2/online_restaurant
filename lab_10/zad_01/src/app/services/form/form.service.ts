import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor(private fb: FormBuilder) {}

  createUsersForm(): FormGroup {
    return this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      addresses: this.fb.array([]),
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
