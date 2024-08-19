import { Routes } from '@angular/router';
import { PruebasComponent } from './components/pruebas/pruebas.component';
import { Prueba2Component } from './components/prueba2/prueba2.component';
import { Prueba3Component } from './components/prueba3/prueba3.component';

export const routes: Routes = [
    {
        path: 'form', component: PruebasComponent
    },
    {
        path: 'pruebas', component: Prueba2Component
    },
    {
        path: 'prueba3', component: Prueba3Component
    }
];
