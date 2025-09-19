import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonesComponent } from './pages/pokemones/pokemones.component';
import { AppRoutingModule } from './app-routing.module';
import { ModalDetalleComponent } from './components/modal-detalle/modal-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PokemonesComponent,
    ModalDetalleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     HttpClientModule
  ],
  exports: [
    NavbarComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
