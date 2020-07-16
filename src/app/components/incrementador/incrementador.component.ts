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

  onChange(nuevoValor){

    if(nuevoValor >= 100){
      this.progreso = 100;
    } else if (nuevoValor <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = nuevoValor;
    }
    this.valorSalida.emit(this.progreso);
  }
}
