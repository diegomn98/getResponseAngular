import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListasComponent } from './listas/listas.component';
import { CrearListaComponent } from './crear-lista/crear-lista.component';

const routes: Routes = [
  { path: '', component: ListasComponent, pathMatch: 'full' },
  { path: 'crearLista', component: CrearListaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
