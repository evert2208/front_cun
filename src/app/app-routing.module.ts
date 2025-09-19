import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonesComponent } from './pages/pokemones/pokemones.component';
import { ModalDetalleComponent } from './components/modal-detalle/modal-detalle.component';

const routes: Routes = [
  { path: 'pokemones', component: PokemonesComponent },
  { path: 'pokemones/:id', component: ModalDetalleComponent },
  { path: '**', redirectTo: 'pokemones', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
