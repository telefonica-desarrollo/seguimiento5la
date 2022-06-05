import { Component, OnInit } from '@angular/core';
import { time } from 'console';
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
    this.NOMBRE_TIENDA = "hola"
    setTimeout(() => {
      this.cargandoData=false
      this.Registros = [
        {
          DN: "5527189809",
          NOMBRE_CLIENTE: "Isidro Roman",
          TIPO_ATENCION: 0,
          FECHA_VISITA: "10/02/2022",
          ID_REGISTRO: 1,
          STATUS: 0,
          CITA: 0,
          FECHA_CITA: "",
          COMENTARIOS: "",
          PRIMER_RESPUESA: 0,
        },
        {
          DN: "5535261285",
          NOMBRE_CLIENTE: "Isidro Roman",
          TIPO_ATENCION: 0,
          FECHA_VISITA: "10/02/2022",
          ID_REGISTRO: 1,
          STATUS: 0,
          CITA: 0,
          FECHA_CITA: "",
          COMENTARIOS: "",
          PRIMER_RESPUESA: 0,
        },
        {
          DN: "5533625892",
          NOMBRE_CLIENTE: "Isidro Roman",
          TIPO_ATENCION: 0,
          FECHA_VISITA: "10/02/2022",
          ID_REGISTRO: 1,
          STATUS: 0,
          CITA: 0,
          FECHA_CITA: "",
          COMENTARIOS: "",
          PRIMER_RESPUESA: 0,
        },
        {
          DN: "5527568915",
          NOMBRE_CLIENTE: "Isidro Roman",
          TIPO_ATENCION: 0,
          FECHA_VISITA: "10/02/2022",
          ID_REGISTRO: 1,
          STATUS: 0,
          CITA: 0,
          FECHA_CITA: "",
          COMENTARIOS: "",
          PRIMER_RESPUESA: 0,
        },
        {
          DN: "5527695362",
          NOMBRE_CLIENTE: "Isidro Roman",
          TIPO_ATENCION: 0,
          FECHA_VISITA: "10/02/2022",
          ID_REGISTRO: 1,
          STATUS: 0,
          CITA: 0,
          FECHA_CITA: "",
          COMENTARIOS: "",
          PRIMER_RESPUESA: 0,
        },
        {
          DN: "5512542154",
          NOMBRE_CLIENTE: "Isidro Roman",
          TIPO_ATENCION: 0,
          FECHA_VISITA: "10/02/2022",
          ID_REGISTRO: 1,
          STATUS: 0,
          CITA: 0,
          FECHA_CITA: "",
          COMENTARIOS: "",
          PRIMER_RESPUESA: 0,
        },
        {
          DN: "5512457896",
          NOMBRE_CLIENTE: "Isidro Roman",
          TIPO_ATENCION: 0,
          FECHA_VISITA: "10/02/2022",
          ID_REGISTRO: 1,
          STATUS: 0,
          CITA: 0,
          FECHA_CITA: "",
          COMENTARIOS: "",
          PRIMER_RESPUESA: 0,
        },
        {
          DN: "5569857412",
          NOMBRE_CLIENTE: "Isidro Roman",
          TIPO_ATENCION: 0,
          FECHA_VISITA: "10/02/2022",
          ID_REGISTRO: 1,
          STATUS: 0,
          CITA: 0,
          FECHA_CITA: "",
          COMENTARIOS: "",
          PRIMER_RESPUESA: 0,
        },
        {
          DN: "5533256984",
          NOMBRE_CLIENTE: "Isidro Roman",
          TIPO_ATENCION: 0,
          FECHA_VISITA: "10/02/2022",
          ID_REGISTRO: 1,
          STATUS: 0,
          CITA: 0,
          FECHA_CITA: "",
          COMENTARIOS: "",
          PRIMER_RESPUESA: 0,
        },

      ]
    }, 2000);
    return

  }

  ngOnInit(): void {
  }

}
