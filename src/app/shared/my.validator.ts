import {FormControl} from '@angular/forms';

export class MyValidator {
  static nameValidator(control: FormControl): {[key: string]: boolean} {
    const str = '(?=.*[-])|(?=.*[A-Z])[0-9a-zA-Z(\-)*]{1,}'
    const nameValid = control.value && new RegExp(str).test(control.value)

    if (!nameValid) { return { userName: true } }
    return null
  }
  static emailValidator(control: FormControl): {[key: string]: boolean} {
    const str =  /^(([A-Za-z0-9])+\.?[A-Za-z0-9]+){0,3}@([a-z]){1,2}(\.com|\.net|\.org|\.co|\.us)$/
    const emailValid = control.value && new RegExp(str).test(control.value)

    if (!emailValid) { return { userEmail: true } }
    return null
  }
  static passwordValidator(control: FormControl): {[key: string]: boolean} {
    const str = '(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{5,}'
    const passwordValid = control.value && new RegExp(str).test(control.value)

    if (!passwordValid) { return { userPassword: true } }
    return null
  }
}
