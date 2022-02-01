import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  Registro: any = [];
  ID_REGISTRO: any = "";
  statusRegistro: any = "0";

  panelOpenState = false;
  selected = "option2"
  
  constructor(private router: Router, private service: ServicesService, private rutaActiva: ActivatedRoute) { 
    this.rutaActiva.params.subscribe((parametros) => {
      this.service.registroInformacion(parametros.id).subscribe((res: any) => {
        console.log(res);
        this.Registro = res;
      })
    })

    this.nombreEjecutivo = "NOMBRE EJECUTIVO"
    this.nombrePdv = "CAC Ejemplo"
    if(this.status == 2) this.primer_respuesta = 2
    if(this.status == 3) this.primer_respuesta = 1

    this.mensaje = `¡Gracias por tu preferencia! En Movistar tenemos la mejor opción para renovar tu Smarthphone, SIN PAGO INICIAL y con los mejores descuentos. ven a tu tienda Movistar
    ${this.nombrePdv}, mi nombre es ${this.nombreEjecutivo} y te atenderé para realizar tu proceso HOY MISMO.`
    this.mensaje2 =  `¡Muchas gracias por su interés! Le atendere personalmente para que conozca los mejores equipos y nuestros descuentos.
    <br> ¿En que horario puede acudir el dia de hoy a Movistar ${this.nombrePdv}?`
    this.mensaje3 = `En Movistar ${this.nombrePdv} estamos para atenderte en un horario de XX:XX A XX:XX, tenemos grandes DESCUENTOS en los mejores Smarthphones, con gusto podemos brindarte más Información para que estrene HOY mismo! Nuestra ubicación es:`
  }

  ngOnInit(): void {
  }

  cambiar(e: any){
    if(this.primer_respuesta == 2) this.status = 2
    if(this.primer_respuesta == 1) this.status = 3
  }

  CopiarImagen(){
  }


  status: number = 0;
  mensaje= ""
  mensaje2 =""
  mensaje3=""

  primer_respuesta = 0
  nombreEjecutivo= " ";
  nombrePdv = " "
}
