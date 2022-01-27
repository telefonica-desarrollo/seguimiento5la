import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seguimiento',
  templateUrl: './seguimiento.component.html',
  styleUrls: ['./seguimiento.component.css']
})
export class SeguimientoComponent implements OnInit {

  constructor(private router: Router) { }

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
  seguimiento(){
    this.router.navigate(["inicio/seguimiento/1"])
  }

}
