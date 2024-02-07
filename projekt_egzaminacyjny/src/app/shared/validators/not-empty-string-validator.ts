import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function notEmptyStringValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value as string;
    if (!value || value.trim().length === 0) {
      return { 'notEmptyString': "Text cannot consist only from spaces" };
    }
    return null;
  }