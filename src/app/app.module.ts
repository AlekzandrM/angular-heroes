import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { HeroSelectionPageComponent } from './hero-selection-page/hero-selection-page.component';
import { UserInfoPageComponent } from './user-info-page/user-info-page.component';
import { HeroesListTabComponent } from './shared/classes/heroes-list-tab/heroes-list-tab.component';
import { HistoryTabComponent } from './shared/classes/history-tab/history-tab.component';
import { PowerUpsTabComponent } from './shared/classes/power-ups-tab/power-ups-tab.component';

import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';
import { SiteLayoutComponent } from './shared/layouts/site-layout/site-layout.component';
import { HeroComponent } from './shared/classes/hero/hero.component';
import { AlphabetComponent } from './shared/classes/alphabet/alphabet.component';
import { InputNameDirective } from './shared/directives/input-name.directive';
import { HeroInfoPageComponent } from './hero-info-page/hero-info-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    AuthLayoutComponent,
    SiteLayoutComponent,
    HeroSelectionPageComponent,
    HeroComponent,
    AlphabetComponent,
    InputNameDirective,
    UserInfoPageComponent,
    HeroesListTabComponent,
    HistoryTabComponent,
    PowerUpsTabComponent,
    HeroInfoPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
