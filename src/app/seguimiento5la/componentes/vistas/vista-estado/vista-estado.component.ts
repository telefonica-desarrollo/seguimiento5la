import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-vista-estado',
  templateUrl: './vista-estado.component.html',
  styleUrls: ['./vista-estado.component.css']
})
export class VistaEstadoComponent implements OnInit {

  constructor(private service: ServicesService) { }

  Estados: any = [
    "AGUASCALIENTES",
    "BAJA CALIFORNIA NORTE",
    "BAJA CALIFORNIA SUR",
    "CAMPECHE",
    "CDMX",
    "CHIAPAS",
    "CHIHUAHUA",
    "COAHUILA",
    "COLIMA",
    "DURANGO",
    "EDO. MEXICO",
    "GUANAJUATO",
    "GUERRERO",
    "HIDALGO",
    "JALISCO",
    "MICHOACAN",
    "MORELOS",
    "NAYARIT",
    "NUEVO LEON",
    "OAXACA",
    "PUEBLA",
    "QUERETARO",
    "QUINTANA ROO",
    "SAN LUIS POTOSI",
    "SINALOA",
    "SONORA",
    "TABASCO",
    "TAMAULIPAS",
    "TLAXCALA",
    "VERACRUZ",
    "YUCATAN",
    "ZACATECAS",
  ];
  estadoSeleccionado: string = ""
  cargando= false;
  Registros: any = []

  buscarPorEstado(data: any){
    this.cargando = true;
    this.service.busquedaEstado(this.estadoSeleccionado).subscribe((res)=> {
      this.Registros = res;
      this.cargando = false
    })
  }

  ngOnInit(): void {
  }

}
