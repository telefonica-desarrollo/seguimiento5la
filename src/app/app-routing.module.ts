import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargaComponent } from './componentes/carga/carga.component';
import { ConfiguracionComponent } from './componentes/configuracion/configuracion.component';
import { FinalizadosComponent } from './componentes/finalizados/finalizados.component';
import { NuevosRegistrosComponent } from './componentes/nuevos-registros/nuevos-registros.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { SeguimientoComponent } from './componentes/seguimiento/seguimiento.component';
import { VistaEstadoComponent } from './componentes/vistas/vista-estado/vista-estado.component';
import { VistaTerritorioComponent } from './componentes/vistas/vista-territorio/vista-territorio.component';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [
  
  {path: "login", component: LoginComponent},
  {path: "inicio", component: PrincipalComponent, children:[
    {path: "registros", component: NuevosRegistrosComponent},
    {path: "seguimiento", component: SeguimientoComponent},
    {path: "seguimiento/:id", component: RegistroComponent},
    {path: "cargar", component: CargaComponent},
    //VISTAS
    {path: "vista/estado", component: VistaEstadoComponent},
    {path: "vista/territorio", component: VistaTerritorioComponent},
  
    {path: "configuracion", component: ConfiguracionComponent},
  ]},
  {path: "**", redirectTo: "login"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
