import { Component, Input } from '@angular/core';

import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  @Input() title = 'Sin titulo';

   // Doughnut
   @Input('labels') doughnutChartLabels: Label[] = ['Info', 'Info1', 'Info2'];
   @Input('data') doughnutChartData: MultiDataSet = [
     [350, 450, 200]
   ];
}
