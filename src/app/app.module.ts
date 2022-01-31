import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http"


import { SidenavComponent } from './componentes/shared/sidenav/sidenav.component';
import { TituloComponent } from './componentes/shared/titulo/titulo.component';
import { NuevosRegistrosComponent } from './componentes/nuevos-registros/nuevos-registros.component';
import { SeguimientoComponent } from './componentes/seguimiento/seguimiento.component';
import { FinalizadosComponent } from './componentes/finalizados/finalizados.component';

import { ConfiguracionComponent } from './componentes/configuracion/configuracion.component';
import { CargaComponent } from './componentes/carga/carga.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { PrincipalComponent } from './principal/principal.component';
import { LoginComponent } from './login/login.component';

//Angular Material
import {MatTableModule} from '@angular/material/table';

const AngularMaterialModule = [
  MatTableModule
]

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
    RegistroComponent,
    LoginComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    AngularMaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
