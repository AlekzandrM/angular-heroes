import { Component } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.scss']
})
export class SiteLayoutComponent {

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  logOut(): void {
    this.auth.logout()
    this.router.navigate(['login'])
  }
}
