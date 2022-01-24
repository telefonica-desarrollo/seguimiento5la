import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargaComponent } from './componentes/carga/carga.component';
import { ConfiguracionComponent } from './componentes/configuracion/configuracion.component';
import { FinalizadosComponent } from './componentes/finalizados/finalizados.component';
import { NuevosRegistrosComponent } from './componentes/nuevos-registros/nuevos-registros.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { SeguimientoComponent } from './componentes/seguimiento/seguimiento.component';

const routes: Routes = [
  {path: "registros", component: NuevosRegistrosComponent},
  {path: "seguimiento", component: SeguimientoComponent},
  {path: "finalizado", component: FinalizadosComponent},
  {path: "seguimiento/:id", component: RegistroComponent},

  {path: "configuracion", component: ConfiguracionComponent},
  {path: "cargar", component: CargaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
