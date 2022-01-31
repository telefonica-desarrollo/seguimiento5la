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

    this.service.login(this.usuario).subscribe((res: any) => {
      console.log(res);
      if(res) {
        console.log(res);
        localStorage.clear()
        localStorage.setItem("ID_TIENDA", res.ID_TIENDA)
        localStorage.setItem("ID_USUARIO", res.ID_USUARIO)
        localStorage.setItem("NOMBRE_USUARIO", res.NOMBRE_USUARIO)
        Swal.close();
        this.router.navigate(["inicio/registros"])
      }else {
        Swal.fire({
          title: "Error al autenticar",
          text: "Usuario o contraseña incorrectos.",
          icon: "error",
          confirmButtonText: "Ok",
        })
      }
    })
  }


}
