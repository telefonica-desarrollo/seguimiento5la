import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services/services.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private service: ServicesService) { }

  ngOnInit(): void {
  }

  usuario: any = {Usuario: "MRT15631", Password: "Movistar"}

  Ingresar(){
    Swal.fire({
      allowOutsideClick: false,
      icon: "info",
      text: "Cargando"
    })
    Swal.showLoading();
    if(this.usuario.Usuario == "MRT15631" && this.usuario.Password == "Movistar"){
      localStorage.clear()
      localStorage.setItem("ID_TIENDA", "Cac Satelite")
      localStorage.setItem("ID_USUARIO", "MRT15631")
      localStorage.setItem("NOMBRE_USUARIO", "Juan Luis Perez")
      this.router.navigate(["inicio/5la/registros"])
      Swal.close();
      return
    }
    Swal.fire({
      title: "Error al autenticar",
      text: "Usuario o contraseña incorrectos.",
      icon: "error",
      confirmButtonText: "Ok",
    })
  }
}
