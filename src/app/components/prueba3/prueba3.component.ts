import { Component } from '@angular/core';

@Component({
  selector: 'app-prueba3',
  standalone: true,
  imports: [],
  templateUrl: './prueba3.component.html',
  styleUrl: './prueba3.component.scss'
})
export class Prueba3Component {

  // Función que simula el lanzamiento de un dado
  dado(): boolean {
    const num = Math.floor(Math.random() * 6) + 1;
    return num % 2 === 0;  // Retorna true si es par, false si es impar
  }

}
