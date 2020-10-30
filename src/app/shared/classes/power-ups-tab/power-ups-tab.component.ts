import { Component, OnInit } from '@angular/core';
import {Powerups} from '../../interfaces';
import {PowerupsService} from '../powerups.service';

@Component({
  selector: 'app-power-ups-tab',
  templateUrl: './power-ups-tab.component.html',
  styleUrls: ['./power-ups-tab.component.scss']
})
export class PowerUpsTabComponent implements OnInit {

  private shield = PowerupsService.getShield()
  private mjolnir = PowerupsService.getMjolnir()
  private nanoArmor = PowerupsService.getArmor()
  private cloack = PowerupsService.getCloak()
  private ring = PowerupsService.getRing()
  private flashBoots = PowerupsService.getBoots()

  listOfPowerups: Powerups[] = []
  listOfPickedPowerups: Powerups[] = []

  usesCount = 3

  constructor() { }

  ngOnInit(): void {
    this.listOfPowerups = [this.shield, this.mjolnir, this.nanoArmor, this.cloack, this.ring, this.flashBoots]
  }

  showTitle(title: string): void {
    this.listOfPowerups.forEach(powerup => {
      if (powerup.title === title) {
        powerup.titleIsVisible = true
      }
    })
  }
  hideTitle(title: string): void {
    this.listOfPowerups.forEach(powerup => {
      if (powerup.title === title) {
        powerup.titleIsVisible = false
      }
    })
  }

  pickPowerup(event, powerup: Powerups): void {
    if (this.usesCount > 0) {
      this.usesCount--
      event.target.style.backgroundColor = '#9E9E9E'
      this.listOfPickedPowerups = [...this.listOfPickedPowerups, powerup]
      powerup.isPicked = true
    }
  }
}
