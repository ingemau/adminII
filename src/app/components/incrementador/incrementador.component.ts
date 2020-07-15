import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent {

   @Input() progreso = 50;

   @Output() valorSalida: EventEmitter<number> = new EventEmitter();

  cambiarValor(valor){

    this.progreso = this.progreso + valor;
    this.valorSalida.emit( this.progreso );

    if (this.progreso <= 0){
      this.valorSalida.emit(0);
      this.progreso = 0;
    }
    if (this.progreso > 100) {
      this.valorSalida.emit(100);
      this.progreso = 100;
    }
  }

  onChange(event){
    console.log(event);
  }
}
