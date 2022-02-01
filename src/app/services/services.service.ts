import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { map } from "rxjs/operators"
import { Observable } from 'rxjs';
import { REGISTRO } from '../interfaces/seguimiento5la.interface';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient ) { }

  // ruta: string = "http://localhost:3000"
  ruta: string = "http://200.36.165.51:3000"

  login(data: any){
    return this.http.post(`${this.ruta}/login`, data)
  }
  registrosNuevos(data: any): Observable <REGISTRO []>{
    return this.http.post(`${this.ruta}/registros/nuevos`, {ID_TIENDA: data}).pipe(
      map( (data: any) => {
        data.map((registrodb: REGISTRO) => {
          registrodb.FECHA_VISITA = new Date(registrodb.FECHA_VISITA).toISOString()
        })
        return data
      })
    )
  }
  registrosConSeguimiento(data: any){
    return this.http.post(`${this.ruta}/registros`, data)
  }
  registroIniciarSeguimiento(data: any){
    return this.http.post(`${this.ruta}/registro/iniciar/seguimiento`, data)
  }
  registroSeguimientoStatus(data: any){
    return this.http.post(`${this.ruta}/registro/seguimiento/status`, data)
  }
  registroSeguimientoInformacion(data: any){
    return this.http.post(`${this.ruta}/registro/seguimiento/informacion`, data)
  }
  informacionTienda(data: any){
    return this.http.post(`${this.ruta}/tienda`, data)
  }

}
