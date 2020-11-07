import {Component, OnInit} from '@angular/core';
import {HistoryTab} from '../../interfaces';

@Component({
  selector: 'app-history-tab',
  templateUrl: './history-tab.component.html',
  styleUrls: ['./history-tab.component.scss']
})
export class HistoryTabComponent implements OnInit {

  heroesList: HistoryTab[]

  ngOnInit(): void {
    const previousBattles = JSON.parse(localStorage.getItem(JSON.stringify(['user'])))
    this.heroesList = previousBattles.previousBattles
  }

  sortByDate(): HistoryTab[] {
    const heroesListSortedByDate = this.heroesList.sort(((a: HistoryTab, b: HistoryTab) => a.battleDate > b.battleDate ? 1 : -1))

    this.heroesList = [...heroesListSortedByDate]
    return this.heroesList
  }

  sortByHeroName(): HistoryTab[] {
    const heroesListSortedByName = this.heroesList.sort(((a: HistoryTab, b: HistoryTab) => (a.heroName > b.heroName) ? 1 : -1 ))

    this.heroesList = [...heroesListSortedByName]
    return this.heroesList
  }

  sortByOpponentName(): HistoryTab[] {
    const heroesListSortedByOpponentName = this.heroesList.sort((a: HistoryTab, b: HistoryTab) => a.opponentName > b.opponentName ? 1 : -1)

    this.heroesList = [...heroesListSortedByOpponentName]
    return this.heroesList
  }

  sortByBattleResult(): HistoryTab[] {
    const heroesListSortedByBattleResult = this.heroesList.sort((a: HistoryTab) => a.result === false ? 1 : -1)

    this.heroesList = [...heroesListSortedByBattleResult]
    return this.heroesList
  }

  trackByHeroesList(index: number, item: HistoryTab): Date {
    return item.battleDate
  }
}
