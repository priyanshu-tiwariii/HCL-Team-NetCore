import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomValidators {
  // Prevents users from submitting a form with just empty spaces
  static noWhitespaceValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const isWhitespace = (control.value || '').trim().length === 0;
      const isValid = !isWhitespace;
      return isValid ? null : { whitespace: true };
    };
  }

  // Validates standard 10-digit Indian mobile numbers
  static mobileNumberValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) return null; // Let the 'required' validator handle empty fields

      const validMobile = /^[6-9]\d{9}$/.test(control.value);
      return validMobile ? null : { invalidMobile: true };
    };
  }

  // Validates alphanumeric fields (e.g., PAN Cards, Policy Numbers)
  static alphaNumericValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) return null;

      const valid = /^[a-zA-Z0-9]+$/.test(control.value);
      return valid ? null : { nonAlphaNumeric: true };
    };
  }
}
