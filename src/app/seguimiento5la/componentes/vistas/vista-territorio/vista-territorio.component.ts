import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-vista-territorio',
  templateUrl: './vista-territorio.component.html',
  styleUrls: ['./vista-territorio.component.css']
})
export class VistaTerritorioComponent implements OnInit {

  constructor(private service: ServicesService) { }

  Territorios: any = [
    "CENTRO FORANEO",
    "CENTRO METROPOLITANO",
    "NORTE",
    "OCCIDENTE",
    "SUR"
  ];
  territorioSeleccionado: string = ""
  cargando= false;
  Registros: any = []

  buscarPorTerritorio(data: any){
    this.cargando = true;
    this.service.busquedaTerritorio(this.territorioSeleccionado).subscribe((res)=> {
      this.Registros = res;
      this.cargando = false
    })
  }


  ngOnInit(): void {
  }

}
