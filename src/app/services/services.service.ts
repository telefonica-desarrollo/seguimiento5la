import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient ) { }

  ruta: string = "http://localhost:3000"

  login(data: any){
    return this.http.post(`${this.ruta}/login`, data)
  }
  registrosNuevos(data: any){
    return this.http.post(`${this.ruta}/registros/nuevos`, data)
  }
  registrosConSeguimiento(data: any){
    return this.http.post(`${this.ruta}/registros`, data)
  }
  registroIniciarSeguimiento(data: any){
    return this.http.post(`${this.ruta}/registro/iniciar/seguimiento`, data)
  }
  cambiarStatus(data: any){
    return this.http.post(`${this.ruta}/registro/cambiar/status`, data)
  }



}
