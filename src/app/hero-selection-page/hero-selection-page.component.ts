import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {HeroesService} from '../shared/services/heroes.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hero-selection-page',
  templateUrl: './hero-selection-page.component.html',
  styleUrls: ['./hero-selection-page.component.scss']
})
export class HeroSelectionPageComponent implements OnInit, OnDestroy {

  name = ''
  forbiddenSybols = '^(?=.*[!@#$%^&(),.+=/\\]\\[{}?><":;1234567890|])'
  heroes$: Subscription
  heroesList = []
  heroesResults = []
  showResultsBlock = false

  constructor(private heroes: HeroesService) { }

  ngOnInit(): void {
  }

  onInputName(): void {
    const invalidInput = new RegExp(this.forbiddenSybols).test(this.name)

    if (invalidInput) {
      return
    }
    this.getByName()
  }

  getByChipOrLetter(chipOrLetter: string): void {
    this.name = chipOrLetter
    this.getByName()
    this.name = chipOrLetter
  }

  getByName(): void {
    this.name.trim()
    const nameExist = this.heroesList.some(el => el === this.name)

    if (!nameExist) {
      this.heroesList = [...this.heroesList, this.name]
    }
    this.heroes$ = this.heroes.getByName(this.name).subscribe(res => {
      if (res.response === 'error') {
        this.showResultsBlock = false
      }
      this.showResultsBlock = true
      this.heroesResults = res.results
    })
    this.name = ''
  }

  ngOnDestroy(): void {
    if (this.heroes$) {
      this.heroes$.unsubscribe()
    }
  }
}
