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
    }
    this.statusRegistro = `${this.Registro.STATUS}`

    // this.rutaActiva.params.subscribe((parametros) => {
    //   this.ID_REGISTRO = parametros.id;
    //   this.service.registroInformacion(parametros.id).subscribe((res: any) => {
    //     console.log(res);
    //     this.Registro = res;

    //     this.statusPrimerMensaje = this.Registro.PRIMER_RESPUESTA
    //     if (this.statusPrimerMensaje == 1) this.statusTextoPrimerMensaje = "Negativa"
    //     if (this.statusPrimerMensaje == 2) this.statusTextoPrimerMensaje = "Positiva"

    //   })
    // })
    this.NOMBRE_EJECUTIVO = localStorage.getItem("NOMBRE_USUARIO") || "";
    this.NOMBRE_TIENDA = localStorage.getItem("NOMBRE_TIENDA") || "";
    this.ID_USUARIO = localStorage.getItem("ID_USUARIO")

    this.DefinirMensajes()
  }

  ngOnInit(): void {
  }

  DefinirMensajes() {
    this.mensajeInicio = `EL smartphone que estabas buscando te esta esperando!. Acude a tu cac m??s cercano para que uno de nuestros asesores te brinde la informaci??n que necesitas y estrenes con Movistar!
                          ??????En Movistar adquiere tu l??nea de manera segura y sin tener que realizar un pago inicial, ll??vate el mejor equipo a meses sin intereses y al mejor precio!!!`

    this.mensajeRespuestaPositiva = `??Muchas gracias por su inter??s! Le atendere personalmente para que conozca los mejores equipos y nuestros descuentos.
                                     \n ??En que horario puede acudir el dia de hoy a Movistar ${this.NOMBRE_TIENDA}?`

    this.mensajeRespuestaNegativa = `En Movistar ${this.NOMBRE_TIENDA} estamos para atenderte. Que tenga un excelente d??a.`
  }

  EnviarMensajeInicio(mensaje: any, status: any) {
    window.open(
      `https://wa.me/+52${this.Registro.DN}?text=${mensaje}`, "_blank"
    )
    Swal.fire({
      allowOutsideClick: false,
      title: "??El mensaje ha sido enviado?",
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
      title: "??Continuar con lo solicitado?",
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
      title: "??Continuar con lo solicitado?",
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
