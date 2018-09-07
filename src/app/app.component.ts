import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weed-em-and-reap';
  yield: number;
  waste: number;
  mother: number;
  room: number;
  propagation: number;


  calcWaste(room, propagation, mother) {
    this.yield = 34.6485141 * room - 3.80823765 * propagation - 0.00233187695 * mother + 193589085.81485766;
  }

  calcYield(room, propagation, mother) {
    this.waste = 6.63795627 * room + 405.122650 * propagation - 0.00494597731 * mother + 410607461.33089596;
  }

  onClick() {
    this.calcWaste(this.room, this.propagation, this.mother);
    this.calcYield(this.room, this.propagation, this.mother);

  }
}
