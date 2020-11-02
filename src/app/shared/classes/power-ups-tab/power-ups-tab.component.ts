import { Component, OnInit } from '@angular/core';
import {PowerupsConstructor, PowerupsService} from '../powerups.service';

@Component({
  selector: 'app-power-ups-tab',
  templateUrl: './power-ups-tab.component.html',
  styleUrls: ['./power-ups-tab.component.scss']
})
export class PowerUpsTabComponent implements OnInit {

  listOfPowerups: PowerupsConstructor[] = []

  constructor(private powerupsService: PowerupsService) {
  }

  ngOnInit(): void {
    this.listOfPowerups = this.powerupsService.LIST_OF_POWERUPS
  }
}
