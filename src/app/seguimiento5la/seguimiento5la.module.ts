import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from '../app-routing.module';


import { PrincipalComponent } from './principal/principal.component';
import { CargaComponent } from './componentes/carga/carga.component';
import { ConfiguracionComponent } from './componentes/configuracion/configuracion.component';
import { NuevosRegistrosComponent } from './componentes/registros-nuevos/nuevos-registros.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { SeguimientoComponent } from './componentes/seguimiento/seguimiento.component';

import { TituloComponent } from './componentes/shared/titulo/titulo.component';
import { SidenavComponent } from '../shared/sidenav/sidenav.component';

import { AngularMaterialModule } from '../shared/angularMaterial.module';
import { VistaEstadoComponent } from './componentes/vistas/vista-estado/vista-estado.component';
import { VistaTerritorioComponent } from './componentes/vistas/vista-territorio/vista-territorio.component';
import { RegistoSComponent } from './componentes/registo-s/registo-s.component';



@NgModule({
  declarations: [
    PrincipalComponent,
    CargaComponent,
    ConfiguracionComponent,
    NuevosRegistrosComponent,
    RegistroComponent,
    SeguimientoComponent,
    SidenavComponent,
    TituloComponent,

    VistaEstadoComponent,
    VistaTerritorioComponent,
    RegistoSComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularMaterialModule
  ]
})
export class Seguimiento5laModule { }
