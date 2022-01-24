import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './componentes/shared/sidenav/sidenav.component';
import { TituloComponent } from './componentes/shared/titulo/titulo.component';
import { NuevosRegistrosComponent } from './componentes/nuevos-registros/nuevos-registros.component';
import { SeguimientoComponent } from './componentes/seguimiento/seguimiento.component';
import { FinalizadosComponent } from './componentes/finalizados/finalizados.component';
import { ConfiguracionComponent } from './componentes/configuracion/configuracion.component';
import { CargaComponent } from './componentes/carga/carga.component';
import { RegistroComponent } from './componentes/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    TituloComponent,
    NuevosRegistrosComponent,
    SeguimientoComponent,
    FinalizadosComponent,
    ConfiguracionComponent,
    CargaComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
