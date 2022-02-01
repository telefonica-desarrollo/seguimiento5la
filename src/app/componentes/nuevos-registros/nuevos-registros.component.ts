import { Component, OnInit } from '@angular/core';
import { REGISTRO } from 'src/app/interfaces/seguimiento5la.interface';
import { ServicesService } from 'src/app/services/services.service';



@Component({
  selector: 'app-nuevos-registros',
  templateUrl: './nuevos-registros.component.html',
  styleUrls: ['./nuevos-registros.component.css']
})

export class NuevosRegistrosComponent implements OnInit {

  ID_TIENDA: any = ""
  cargandoData: boolean = true
  Registros: REGISTRO [] = []
  

  constructor(private service: ServicesService) { 
    this.ID_TIENDA = localStorage.getItem("ID_TIENDA")
    this.service.registrosNuevos(this.ID_TIENDA).subscribe((res) => {
      this.Registros = res;
      console.log(this.Registros);
      this.cargandoData = false
    })
  }

  ngOnInit(): void {
  }

  nombreColumnas= ["dn", "Atencion", "Fecha", "Seguimiento"]
  data= [
    {dn: 55252415, Atencion: "Alta", Fecha: "15/09/2022"},
    {dn: 55252415, Atencion: "Alta", Fecha: "15/09/2022"},
    {dn: 55252415, Atencion: "Alta", Fecha: "15/09/2022"},
    {dn: 55252415, Atencion: "Alta", Fecha: "15/09/2022"},
    {dn: 55252415, Atencion: "Alta", Fecha: "15/09/2022"},
    {dn: 55252415, Atencion: "Alta", Fecha: "15/09/2022"},
    {dn: 55252415, Atencion: "Alta", Fecha: "15/09/2022"},
    {dn: 55252415, Atencion: "Alta", Fecha: "15/09/2022"},
    {dn: 55252415, Atencion: "Alta", Fecha: "15/09/2022"},
    {dn: 55252415, Atencion: "Alta", Fecha: "15/09/2022"},
    {dn: 55252415, Atencion: "Alta", Fecha: "15/09/2022"},
    {dn: 55252415, Atencion: "Alta", Fecha: "15/09/2022"},
    {dn: 55252415, Atencion: "Alta", Fecha: "15/09/2022"},
    {dn: 55252415, Atencion: "Alta", Fecha: "15/09/2022"},
    {dn: 55252415, Atencion: "Alta", Fecha: "15/09/2022"},
    {dn: 55252415, Atencion: "Alta", Fecha: "15/09/2022"},
    {dn: 55252415, Atencion: "Alta", Fecha: "15/09/2022"},
    {dn: 55252415, Atencion: "Alta", Fecha: "15/09/2022"},
    {dn: 55252415, Atencion: "Alta", Fecha: "15/09/2022"},
    {dn: 55252415, Atencion: "Alta", Fecha: "15/09/2022"},
    {dn: 55252415, Atencion: "Alta", Fecha: "15/09/2022"},
    {dn: 55252415, Atencion: "Alta", Fecha: "15/09/2022"},
    {dn: 55252415, Atencion: "Alta", Fecha: "15/09/2022"},
    {dn: 55252415, Atencion: "Alta", Fecha: "15/09/2022"},
    {dn: 55252415, Atencion: "Alta", Fecha: "15/09/2022"},
    {dn: 55252415, Atencion: "Alta", Fecha: "15/09/2022"},
    {dn: 55252415, Atencion: "Alta", Fecha: "15/09/2022"},
    {dn: 55252415, Atencion: "Alta", Fecha: "15/09/2022"},
    {dn: 55252415, Atencion: "Alta", Fecha: "15/09/2022"},
    {dn: 55252415, Atencion: "Alta", Fecha: "15/09/2022"},
    {dn: 55252415, Atencion: "Alta", Fecha: "15/09/2022"},
    {dn: 55252415, Atencion: "Alta", Fecha: "15/09/2022"},
    {dn: 55252415, Atencion: "Alta", Fecha: "15/09/2022"},
    {dn: 55252415, Atencion: "Alta", Fecha: "15/09/2022"},
    {dn: 55252415, Atencion: "Alta", Fecha: "15/09/2022"},
    {dn: 55252415, Atencion: "Alta", Fecha: "15/09/2022"},
    
  ]

  hola(){
    alert("hola")
  }

}
