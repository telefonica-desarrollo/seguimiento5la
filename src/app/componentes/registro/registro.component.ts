import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  Registro: any = [];
  statusRegistro: any = "";
  
  ID_REGISTRO: any = "";
  ID_USUARIO: any = "";
  NOMBRE_EJECUTIVO: string =""
  NOMBRE_TIENDA: string =""
  
  mensajeInicio: string = "";
  mensajeRespuestaPositiva: string ="";
  mensajeRespuestaNegativa: string = "";

  constructor(private router: Router, private service: ServicesService, private rutaActiva: ActivatedRoute) { 
    this.rutaActiva.params.subscribe((parametros) => {
      this.ID_REGISTRO = parametros.id;
      this.service.registroInformacion(parametros.id).subscribe((res: any) => {
        console.log(res);
        this.Registro = res;
        this.statusRegistro = `${this.Registro.STATUS}`
      })
    })
    this.NOMBRE_EJECUTIVO = localStorage.getItem("NOMBRE_USUARIO") || "";
    this.NOMBRE_TIENDA = localStorage.getItem("NOMBRE_TIENDA") || "";
    this.ID_USUARIO = localStorage.getItem("ID_USUARIO")

    this.DefinirMensajes()
  }

  ngOnInit(): void {
  }
  
  DefinirMensajes(){
    this.mensajeInicio = `¡Gracias por tu preferencia! En Movistar tenemos la mejor opción para renovar tu Smarthphone, SIN PAGO INICIAL y con los mejores descuentos. ven a tu tienda Movistar
                          ${this.NOMBRE_TIENDA}, mi nombre es ${this.NOMBRE_EJECUTIVO} y te atenderé para realizar tu proceso HOY MISMO.`

    this.mensajeRespuestaPositiva =  `¡Muchas gracias por su interés! Le atendere personalmente para que conozca los mejores equipos y nuestros descuentos.
                                     \n ¿En que horario puede acudir el dia de hoy a Movistar ${this.NOMBRE_TIENDA}?`

    this.mensajeRespuestaNegativa = `En Movistar ${this.nombrePdv} estamos para atenderte. Que tenga un excelente día.`
  }

  EnviarMensajeInicio(mensaje: any, status: any){
    // window.open(
    //   `https://wa.me/+52${this.Registro.DN}?text=${mensaje}`, "_blank"
    // )
    Swal.fire({
      allowOutsideClick: false,
      title: "¿El mensaje ha sido enviado?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'success',
      cancelButtonColor: 'danger',
      confirmButtonText: 'Mensaje enviado',
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {

        Swal.fire({
          allowOutsideClick: false,
          icon: "info",
          text: "Cargando"
        })
        Swal.showLoading();

        //CAMBIAMOS STATUS DEL REGISTRO
        this.service.registroSeguimientoStatus({ID_REGISTRO: this.ID_REGISTRO, STATUS: status}).subscribe(
          (res)=>{
            console.log(res)
            this.statusRegistro = `${status}`
            this.Registro.STATUS = status
            Swal.close()
          }
        )
        //AGREGAMOS REGISTRO AL INICIAR CONTACTO
        if(status == 1){
          this.service.registroIniciarSeguimiento({ID_REGISTRO: this.ID_REGISTRO, ID_USUARIO: this.ID_USUARIO}).subscribe( (res) => console.log(res))
        }
      }
    })
  }

  cambiar(e: any){
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
