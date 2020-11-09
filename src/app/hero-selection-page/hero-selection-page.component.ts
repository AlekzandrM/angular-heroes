import {Component, OnDestroy} from '@angular/core';
import {HeroesService} from '../shared/services/heroes.service';
import {Subject} from 'rxjs';
import {Hero} from '../shared/interfaces';
import {map, takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-hero-selection-page',
  templateUrl: './hero-selection-page.component.html',
  styleUrls: ['./hero-selection-page.component.scss']
})
export class HeroSelectionPageComponent implements OnDestroy {

  name = ''
  forbiddenSybols = '^(?=.*[!@#$%^&(),.+=/\\]\\[{}?><":;1234567890|])'
  heroesList: string[] = []
  heroesResults: Hero[] = []
  showResultsBlock = false
  private readonly componentDestroyed$: Subject<boolean> = new Subject<boolean>()

  constructor(private heroesService: HeroesService) { }

  onInputName(): void {
    const invalidInput = new RegExp(this.forbiddenSybols).test(this.name)

    if (!invalidInput) {
      this.onFetchByName()
    }
  }

  onFetchByChipOrLetter(chipOrLetter: string): void {
    this.name = chipOrLetter
    this.onFetchByName()
    this.name = chipOrLetter
  }

  onFetchByName(): void {
    this.name.trim()
    const nameExist = this.heroesList.some(heroName => heroName === this.name)

    if (!nameExist) {
      this.heroesList = [...this.heroesList, this.name]
    }
    this.fetchHeroes()
    this.name = ''
  }
  fetchHeroes(): void {
    this.heroesService.getByName(this.name)
      .pipe(
        map(response => {
          this.replaceNulls(response.results)
          return response
        }),
        takeUntil(this.componentDestroyed$)
      )
      .subscribe(res => {
      if (res.response === 'error') {
        this.showResultsBlock = false
      }
      this.showResultsBlock = true
      this.heroesResults = res.results;
    })
  }

  replaceNulls(heroesList: Hero[]): void {
    heroesList.forEach(hero => {
      for (let [key, value] of Object.entries(hero.powerstats)) {
        if (value === 'null') {
          value = '0'
        }
        hero.powerstats[key] = value
      }
    })
  }

  trackByHeroesList(index: number, item: string): string {
    return item
  }
  trackByHeroesResults(index: number, item: Hero): string {
    return item.id
  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next(true)
  }
}
