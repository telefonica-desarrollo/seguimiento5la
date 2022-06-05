import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-registo-s',
  templateUrl: './registo-s.component.html',
  styleUrls: ['./registo-s.component.css']
})
export class RegistoSComponent implements OnInit {

  Registro: any = [];

  //LocalStorage
  ID_REGISTRO: any = "";
  ID_USUARIO: any = "";
  NOMBRE_EJECUTIVO: string = ""
  NOMBRE_TIENDA: string = ""

  //Vaiables del componente
  statusRegistro: any = "";
  statusPrimerMensaje: number = 0;
  statusTextoPrimerMensaje: string = "Sin respuesta"

  mensajeInicio: string = "";
  mensajeRespuestaPositiva: string = "";
  mensajeRespuestaNegativa: string = "";

  constructor(private router: Router, private service: ServicesService, private rutaActiva: ActivatedRoute) {
    this.Registro = {
      DN: "5532145620",
      NOMBRE_CLIENTE: "Isidro Roman",
      TIPO_ATENCION: 0,
      FECHA_VISITA: "10/02/2022",
      ID_REGISTRO: 2,
      STATUS: 2,
      CITA: 0,
      FECHA_CITA: "",
      COMENTARIOS: "",
      PRIMER_RESPUESTA: 2,
    }
    this.statusRegistro = `${this.Registro.STATUS}`
    this.statusPrimerMensaje = this.Registro.PRIMER_RESPUESTA
    if (this.statusPrimerMensaje == 1) this.statusTextoPrimerMensaje = "Negativa"
    if (this.statusPrimerMensaje == 2) this.statusTextoPrimerMensaje = "Positiva"

    this.DefinirMensajes()
  }

  ngOnInit(): void {
  }

  DefinirMensajes() {
    this.mensajeInicio = `EL smartphone que estabas buscando te esta esperando!. Acude a tu cac más cercano para que uno de nuestros asesores te brinde la información que necesitas y estrenes con Movistar!
                          ¡¡¡En Movistar adquiere tu línea de manera segura y sin tener que realizar un pago inicial, llévate el mejor equipo a meses sin intereses y al mejor precio!!!`

    this.mensajeRespuestaPositiva = `¡Muchas gracias por su interés! Le atendere personalmente para que conozca los mejores equipos y nuestros descuentos.
                                     \n ¿En que horario puede acudir el dia de hoy a Movistar ${this.NOMBRE_TIENDA}?`

    this.mensajeRespuestaNegativa = `En Movistar ${this.NOMBRE_TIENDA} estamos para atenderte. Que tenga un excelente día.`
  }

  EnviarMensajeInicio(mensaje: any, status: any) {
    window.open(
      `https://wa.me/+52${this.Registro.DN}?text=${mensaje}`, "_blank"
    )
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
        setTimeout(() => {
          this.Registro.STATUS = status
          this.statusRegistro = `${this.Registro.STATUS}`
          Swal.close()
          Swal.fire({
            icon: 'success',
            title: 'Cambio realizado',
            showConfirmButton: false,
            timer: 1500
          })
        }, 2000);
      }
    })
  }

  PimerRespuesta() {
    Swal.fire({
      allowOutsideClick: false,
      title: "¿Continuar con lo solicitado?",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: 'success',
      cancelButtonColor: 'danger',
      confirmButtonText: 'Continuar',
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        if (this.statusPrimerMensaje == 1) this.statusTextoPrimerMensaje = "Negativa"
        if (this.statusPrimerMensaje == 2) this.statusTextoPrimerMensaje = "Positiva"
        Swal.fire({
          allowOutsideClick: false,
          icon: "info",
          text: "Cargando"
        })
        Swal.showLoading();
        this.Registro.STATUS = 2
        this.statusRegistro = `${this.Registro.STATUS}`
        Swal.close()
        return
      } else {
        this.statusPrimerMensaje = 0
      }
    })
  }

  cambiarStatus(status: any) {
    Swal.fire({
      allowOutsideClick: false,
      title: "¿Continuar con lo solicitado?",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: 'success',
      cancelButtonColor: 'danger',
      confirmButtonText: 'Continuar',
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        this.Registro.STATUS = status
        this.statusRegistro = `${this.Registro.STATUS}`
        return
      }
    })
    //RECORDEMOS LOS STATUS QUE MANEJAMOS
    // [0] SIN CONTACTAR
    // [1] CONTACTO INICIADO
    // [0] PENDIENTE
    // [0] FINALIZADO
    // [0] DN INCORRECTO
    // [0] COMPORTAMIENTO AGRESIVO


  }

}
