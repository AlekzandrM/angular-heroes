import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './shared/services/auth.guard';

import {AuthLayoutComponent} from './shared/layouts/auth-layout/auth-layout.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {RegisterPageComponent} from './register-page/register-page.component';
import {SiteLayoutComponent} from './shared/layouts/site-layout/site-layout.component';
import {HeroSelectionPageComponent} from './hero-selection-page/hero-selection-page.component';
import {UserInfoPageComponent} from './user-info-page/user-info-page.component';
import {HeroesListTabComponent} from './shared/classes/heroes-list-tab/heroes-list-tab.component';
import {HistoryTabComponent} from './shared/classes/history-tab/history-tab.component';
import {PowerUpsTabComponent} from './shared/classes/power-ups-tab/power-ups-tab.component';
import {HeroInfoPageComponent} from './hero-info-page/hero-info-page.component';
import {HeroesBattlePageComponent} from './heroes-battle-page/heroes-battle-page.component';
import {ResolveGuard} from './shared/services/resolve.guard';

const routes: Routes = [
  {
    path: '', component: AuthLayoutComponent, children: [
      {path: '', redirectTo: '/login', pathMatch: 'full'},
      {path: 'login', component: LoginPageComponent},
      {path: 'register', component: RegisterPageComponent}
    ]
  },
  {
    path: '', component: SiteLayoutComponent, children: [
      {path: 'select', component: HeroSelectionPageComponent, canActivate: [AuthGuard]},
      {path: 'select/:id', component: HeroInfoPageComponent, canActivate: [AuthGuard]},
      {path: 'battle', component: HeroesBattlePageComponent, canActivate: [AuthGuard], resolve: {hero: ResolveGuard}},
      {path: 'info', component: UserInfoPageComponent, canActivate: [AuthGuard], children: [
          {path: '', redirectTo: 'list', pathMatch: 'full'},
          {path: 'list', component: HeroesListTabComponent, canActivateChild: [AuthGuard]},
          {path: 'history', component: HistoryTabComponent, canActivateChild: [AuthGuard]},
          {path: 'power', component: PowerUpsTabComponent, canActivateChild: [AuthGuard]}
        ]}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
