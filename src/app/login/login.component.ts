import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  usuario: any = {Usuario: "CAC_Ejemplo", Contrasena: "123"}

  Ingresar(){
    this.router.navigate(["inicio/registros"])
  }


}
