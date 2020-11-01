import { Component, OnInit } from '@angular/core';
import {PowerupsService} from '../powerups.service';

@Component({
  selector: 'app-power-ups-tab',
  templateUrl: './power-ups-tab.component.html',
  styleUrls: ['./power-ups-tab.component.scss']
})
export class PowerUpsTabComponent implements OnInit {

  listOfPowerups: PowerupsService[] = []

  ngOnInit(): void {
    this.listOfPowerups = [
      new PowerupsService('Captain America shield', 'durability +10', true, '../../assets/kashild.png', true, false, 3),
      new PowerupsService('Mjolnir', 'power +10', true, '../../assets/mjolnir.png', true, false, 3),
      new PowerupsService('Ironman nano armor', 'combat +10', true, '../../assets/ironman.png', true, false, 3),
      new PowerupsService('Dr. Stranges cloak', 'intelligence +10', true, '../../assets/cloak.png', true, false, 3),
      new PowerupsService('Green lanterns ring', 'strength +10', true, '../../assets/ring.png', true, false, 3),
      new PowerupsService('Flash boots', 'speed +10', true, '../../assets/boots.png', true, false, 3)
    ]
  }

  sortPowerupsByUsesLeft(): PowerupsService[] {
    const sortedList = this.listOfPowerups.sort((a: PowerupsService, b: PowerupsService) => a.usesCount > b.usesCount ? 1 : -1)

    return this.listOfPowerups = [...sortedList]
  }

}
