import {Component, DoCheck, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {Hero} from '../../interfaces';

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.scss']
})
export class SiteLayoutComponent implements DoCheck{

  selectedHeroesList: Hero[] = []

  constructor(
    private auth: AuthService,
    private router: Router,
    public userService: UserService
  ) { }

  ngDoCheck(): void {
    this.selectedHeroesList = this.userService.selectedHeroes
  }

  logOut(): void {
    this.auth.logout()
    this.router.navigate(['login'])
  }
}
