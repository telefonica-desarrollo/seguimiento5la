import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargaComponent } from './seguimiento5la/componentes/carga/carga.component';
import { ConfiguracionComponent } from './seguimiento5la/componentes/configuracion/configuracion.component';
import { NuevosRegistrosComponent } from './seguimiento5la/componentes/registros-nuevos/nuevos-registros.component';
import { RegistroComponent } from './seguimiento5la/componentes/registro/registro.component';
import { RegistoSComponent } from './seguimiento5la/componentes/registo-s/registo-s.component';

import { SeguimientoComponent } from './seguimiento5la/componentes/seguimiento/seguimiento.component';
import { VistaEstadoComponent } from './seguimiento5la/componentes/vistas/vista-estado/vista-estado.component';
import { VistaTerritorioComponent } from './seguimiento5la/componentes/vistas/vista-territorio/vista-territorio.component';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './seguimiento5la/principal/principal.component';

const routes: Routes = [
  
  {path: "login", component: LoginComponent},
  {path: "inicio/5la", component: PrincipalComponent, children:[
    {path: "registros", component: NuevosRegistrosComponent},
    {path: "seguimiento", component: SeguimientoComponent},
    {path: "seguimiento/:id", component: RegistroComponent},
    {path: "seguimiento/s/:id", component: RegistoSComponent},
    {path: "cargar", component: CargaComponent},
    {path: "configuracion", component: ConfiguracionComponent},
    //VISTAS
    {path: "vista/estado", component: VistaEstadoComponent},
    {path: "vista/territorio", component: VistaTerritorioComponent},
  ]},
  {path: "**", redirectTo: "login"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
