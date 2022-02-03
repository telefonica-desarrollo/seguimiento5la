import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css']
})
export class TituloComponent implements OnInit {

  NOMBRE_USUARIO: any = ""
  constructor(private service: ServicesService) { 
    this.NOMBRE_USUARIO = localStorage.getItem("NOMBRE_USUARIO")
    localStorage.setItem("NOMBRE_USUARIO", this.NOMBRE_USUARIO)
  }

  ngOnInit(): void {
  }

}
