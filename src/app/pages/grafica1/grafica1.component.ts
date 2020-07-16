import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  public labels1 = ['Corriente', 'Deuda de 1 a 3 pagos', 'Deuda 3+'];
  public data1 = [
    [75, 10, 15]
  ];

}
