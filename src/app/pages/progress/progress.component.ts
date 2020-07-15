import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: [
  ]
})
export class ProgressComponent {

  progreso1 = 85;

  progreso2 = 25;

  get getprogreso1() {
    return `${this.progreso1}%`;
  }

  get getprogreso2() {
    return `${this.progreso2}%`;
  }
}
