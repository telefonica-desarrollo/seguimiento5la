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

    this.service.registrosConSeguimiento(this.ID_USUARIO).subscribe((res) => {
      this.Registros = res;
      this.cargandoData = false
    })
  }

  ngOnInit(): void {
  }

}
