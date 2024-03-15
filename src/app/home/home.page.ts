import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  temperature: number = 0;
  constructor() {}
  getMercuryColor() {
    if (this.temperature <= 25) {
      return 'green';
    } else if (this.temperature <= 50) {
      return 'yellow';
    } else if (this.temperature <= 75) {
      return 'orange';
    } else {
      return 'red';
    }
  }
}
