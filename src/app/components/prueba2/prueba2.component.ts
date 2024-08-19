import { Component } from '@angular/core';

@Component({
  selector: 'app-prueba2',
  standalone: true,
  imports: [],
  templateUrl: './prueba2.component.html',
  styleUrl: './prueba2.component.scss'
})
export class Prueba2Component {
  dado(): boolean {
    const num = Math.floor(Math.random() * 6) + 1;
    return num % 2 !== 0;  // Retorna true si es impar, false si es par

  }
}
