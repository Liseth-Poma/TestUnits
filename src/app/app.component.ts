import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PruebasComponent } from './components/pruebas/pruebas.component';
import { Prueba2Component } from './components/prueba2/prueba2.component';
import { Prueba3Component } from './components/prueba3/prueba3.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PruebasComponent, Prueba2Component, Prueba3Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Prueba1';
}
