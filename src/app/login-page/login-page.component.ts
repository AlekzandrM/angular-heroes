import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../shared/interfaces';
import {MyValidator} from '../shared/my.validator';
import {AuthService} from '../shared/services/auth.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  form: FormGroup
  message = ''

  constructor(public authService: AuthService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      if (params['loginAgain']) {
        this.message = 'Your current session has expired. Please login\n' +
          'again to continue using this app!'
      }
    })

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
      ])
    })
  }

  onSubmit(): void {
    const user: User = {
      email: this.form.value.email,
      password: this.form.value.password,
      name: this.form.value.name
    }
    const registeredUser = this.authService.login(user)

    if (registeredUser) {
      this.router.navigate(['/select'])
    }
  }
}
