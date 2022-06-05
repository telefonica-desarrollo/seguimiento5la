import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';


@Component({
  selector: 'app-seguimiento',
  templateUrl: './seguimiento.component.html',
  styleUrls: ['./seguimiento.component.css']
})
export class SeguimientoComponent implements OnInit {

  nombreColumnas= ["dn", "Atencion", "Fecha","Status", "Seguimiento"]
  ID_TIENDA: any = ""
  ID_USUARIO: any = ""
  cargandoData: boolean = true
  Registros: any = []

  constructor(private service: ServicesService) { 
    this.ID_TIENDA = localStorage.getItem("ID_TIENDA")
    this.ID_USUARIO = localStorage.getItem("ID_USUARIO")

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
  }

  ngOnInit(): void {
  }

}
