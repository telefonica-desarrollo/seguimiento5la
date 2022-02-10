import { Component, OnInit } from '@angular/core';
import { REGISTRO } from 'src/app/interfaces/seguimiento5la.interface';
import { ServicesService } from 'src/app/services/services.service';

 

@Component({
  selector: 'app-nuevos-registros',
  templateUrl: './nuevos-registros.component.html',
  styleUrls: ['./nuevos-registros.component.css']
})

export class NuevosRegistrosComponent implements OnInit {

  nombreColumnas= ["dn", "Atencion", "Fecha", "Seguimiento"]
  // ID_TIENDA: any = ""
  NOMBRE_TIENDA: any = ""
  cargandoData: boolean = true
  Registros: REGISTRO [] = []
  

  constructor(private service: ServicesService) { 
    this.NOMBRE_TIENDA = localStorage.getItem("NOMBRE_TIENDA")
    this.service.registrosNuevos(this.NOMBRE_TIENDA).subscribe((res) => {
      this.Registros = res;
      console.log(this.Registros);
      this.cargandoData = false
    })
  }

  ngOnInit(): void {
  }

}
