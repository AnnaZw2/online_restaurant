import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function notEmptyStringValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value as string;
    if (!value || value.trim().length === 0) {
      return { 'notEmptyString': true };
    }
    return null;
  };
}