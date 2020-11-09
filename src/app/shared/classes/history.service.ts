import { Injectable } from '@angular/core';
import {HistoryTab, User} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  battle: HistoryTab
  battleList: HistoryTab[] = []
  localStorageInfo: User

  saveBattle(battle: HistoryTab): void {
    this.battle = battle
    this.battleList = [...this.battleList, this.battle]
    this.localStorageInfo = JSON.parse(localStorage.getItem(JSON.stringify(['user'])))
    this.localStorageInfo.previousBattles = [...this.localStorageInfo.previousBattles, this.battle]
    localStorage.setItem(JSON.stringify(['user']), JSON.stringify(this.localStorageInfo))
  }
}
