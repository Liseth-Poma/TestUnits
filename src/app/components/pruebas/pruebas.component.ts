import { Component } from '@angular/core';

@Component({
  selector: 'app-pruebas',
  standalone: true,
  imports: [],
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.scss']
})
export class PruebasComponent {
  dado(): boolean {
    const num = Math.floor(Math.random() * 10) + 1;
    return num % 2 === 0;
  }

}
