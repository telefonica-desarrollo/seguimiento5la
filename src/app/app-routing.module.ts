import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargaComponent } from './componentes/carga/carga.component';
import { ConfiguracionComponent } from './componentes/configuracion/configuracion.component';
import { FinalizadosComponent } from './componentes/finalizados/finalizados.component';
import { NuevosRegistrosComponent } from './componentes/nuevos-registros/nuevos-registros.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { SeguimientoComponent } from './componentes/seguimiento/seguimiento.component';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [
  
  {path: "login", component: LoginComponent},
  {path: "inicio", component: PrincipalComponent, children:[
    {path: "registros", component: NuevosRegistrosComponent},
    {path: "seguimiento", component: SeguimientoComponent},
    {path: "seguimiento/:id", component: RegistroComponent},
    {path: "cargar", component: CargaComponent},
  
    {path: "configuracion", component: ConfiguracionComponent},
  ]},
  {path: "**", redirectTo: "login"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
