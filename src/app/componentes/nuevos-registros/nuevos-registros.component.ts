import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevos-registros',
  templateUrl: './nuevos-registros.component.html',
  styleUrls: ['./nuevos-registros.component.css']
})
export class NuevosRegistrosComponent implements OnInit {

  constructor() { }

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
