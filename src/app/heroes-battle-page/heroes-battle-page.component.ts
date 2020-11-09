import {Component, OnDestroy, OnInit} from '@angular/core';
import {Hero, HistoryTab, PowerupInfo} from '../shared/interfaces';
import {UserService} from '../shared/services/user.service';
import {HeroesService} from '../shared/services/heroes.service';
import {Subject} from 'rxjs';
import {map, takeUntil} from 'rxjs/operators';
import {IPowerup, PowerupsService} from '../shared/classes/powerups.service';
import {HistoryService} from '../shared/classes/history.service';

@Component({
  selector: 'app-heroes-battle-page',
  templateUrl: './heroes-battle-page.component.html',
  styleUrls: ['./heroes-battle-page.component.scss']
})
export class HeroesBattlePageComponent implements OnInit, OnDestroy {

  myHero: Hero
  opponentHero: Hero
  opponentIsLoaded = false
  listOfPowerups: IPowerup[] = []
  listOfPickedPowerups: IPowerup[] = []
  showModal: boolean
  myHeroWin: boolean
  loaderActive = false
  fightResult = ''
  battleResult: HistoryTab
  poweupInfo: PowerupInfo
  private readonly componentDestroyed$: Subject<boolean> = new Subject<boolean>()

  constructor(private userService: UserService,
              private heroesService: HeroesService,
              private powerupsService: PowerupsService,
              private historyService: HistoryService) { }

  ngOnInit(): void {
    this.listOfPowerups = this.powerupsService.LIST_OF_POWERUPS
    this.poweupInfo = {combat: 0, durability: 0, intelligence: 0, power: 0, speed: 0, strength: 0}
    this.hidePowerupsTitles()
    this.myHero = this.userService.getMyHero()
    this.myHero.myHero = true
    this.getOpponent()
  }

  hidePowerupsTitles(): void {
    this.listOfPowerups.forEach(powerup => powerup.titleIsVisible = false)
  }

  getOpponent(): void {
    const opponentId = Math.floor(732 * Math.random()).toString()

    if (opponentId === this.myHero.id) {
        this.getOpponent()
    } else {
      this.heroesService.setOpponentId(opponentId)
      this.fetchOpponentHero(opponentId)
    }
  }

  fetchOpponentHero(opponentId): void {
     this.heroesService.getById(opponentId)
       .pipe(
         map(hero => {
           this.replaceNulls(hero)
           return hero
             }),
         takeUntil(this.componentDestroyed$)
       )
       .subscribe(opponentHero => {
         this.opponentHero = opponentHero
         this.opponentHero.myHero = false
         this.opponentIsLoaded = true
       })
  }

  replaceNulls(hero: Hero): void {
    for (let [key, value] of Object.entries(hero.powerstats)) {
      if (value === 'null') {
        value = '0'
      }
      hero.powerstats[key] = value
    }
  }

  pickPowerup(powerup: IPowerup): void {
    if (powerup.usesCount > 0) {
      this.listOfPickedPowerups = [...this.listOfPickedPowerups, powerup]
      this.createPowerupInfo(powerup.description)
    }
    this.powerupsService.pickPowerup(powerup)
  }

  createPowerupInfo(description: string): void {
    if (description === 'durability +10') {
      this.poweupInfo.durability++
    } else if (description === 'power +10') {
      this.poweupInfo.power++
    } else if (description === 'combat +10') {
      this.poweupInfo.combat++
    } else if (description === 'intelligence +10') {
      this.poweupInfo.intelligence++
    } else if (description === 'strength +10') {
      this.poweupInfo.strength++
    } else if (description === 'speed +10') {
      this.poweupInfo.speed++
    }
  }

  calculationOfTheWinner(): void {
    const {strength, speed, durability, combat, power, intelligence} = this.myHero.powerstats
    const {strength: strengthOp,
      speed: speedOp,
      durability: durabilityOp,
      combat: combatOp,
      power: powerOp,
      intelligence: intelligenceOp} = this.opponentHero.powerstats
    const strengthWin = +strength / (+strength + +strengthOp);
    const speedWin = +speed / (+speed + +speedOp);
    const durabilityWin = +durability / (+durability + +durabilityOp);
    const combathWin = +combat / (+combat + +combatOp);
    const powerWin = +power / (+power + +powerOp);
    const intelligenceWin = +intelligence / (+intelligence + +intelligenceOp);
    let averageProbability = (strengthWin + speedWin + durabilityWin + combathWin + powerWin + intelligenceWin) / 6

    if (this.listOfPickedPowerups.length > 0) {
      const bonus = this.listOfPickedPowerups.length * 10
      averageProbability = averageProbability * (100 + bonus) / 100
    }

    const dispersion5persent = Math.floor(Math.random() * 51)
    this.myHeroWin = (averageProbability * 1000 + dispersion5persent) >= 500
  }

  startBattle(): void {
    this.loaderActive = true
    setTimeout(() => {
      this.loaderActive = false
      this.calculationOfTheWinner()
      this.fightResult = this.myHeroWin ? 'You win! ' : 'You lose '
      this.showModal = true
    }, 1000)
  }

  closeModal(): void {
    this.showModal = false
    this.fightResult = ''
    this.battleResult = {
      battleDate: new Date(),
      heroName: this.myHero.name,
      opponentName: this.opponentHero.name,
      result: this.myHeroWin
    }
    this.historyService.saveBattle(this.battleResult)
    if (this.myHeroWin) {
      this.getOpponent()
      this.listOfPickedPowerups.length = 0
      this.poweupInfo.combat = this.poweupInfo.durability = this.poweupInfo.intelligence = 0
      this.poweupInfo.power = this.poweupInfo.speed = this.poweupInfo.strength = 0
    }
  }

  trackByListOfPickedPowerups(index: number, item: IPowerup): string {
    return item.title
  }
  trackByListOfPowerups(index: number, item: IPowerup): string {
    return item.title
  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next(true)
  }
}
