import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../shared/interfaces';
import {MyValidator} from '../shared/my.validator';
import {AuthService} from '../shared/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  form: FormGroup

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
        MyValidator.emailValidator
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
        MyValidator.passwordValidator
      ]),
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
        MyValidator.nameValidator
      ])
    })
  }

  onSubmit(): void {
    this.form.disable()
    const user: User = {
      email: this.form.value.email,
      password: this.form.value.password,
      name: this.form.value.name
    }

    this.authService.register(user)
    this.router.navigate(['/select'])
    this.form.enable()
  }
}
