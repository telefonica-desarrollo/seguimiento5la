import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { map } from "rxjs/operators"
import { Observable } from 'rxjs';
import { REGISTRO } from '../interfaces/seguimiento5la.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient ) { }

  ruta: string = environment.rutaApi

  login(data: any){
    return this.http.post(`${this.ruta}/login`, data)
  }
  registrosNuevos(data: any): Observable <REGISTRO []>{
    return this.http.post(`${this.ruta}/registros/nuevos`, {NOMBRE_TIENDA: data}).pipe(
      map( (data: any) => {
        return data
      })
    )
  }
  registroInformacion(data: any): Observable <REGISTRO>{
    return this.http.post(`${this.ruta}/registro`, {ID_REGISTRO: data}).pipe(
      map( (data: any) => {
        return data
      })
    )
  }
  registrosConSeguimiento(data: any){
    return this.http.post(`${this.ruta}/registros`, {ID_USUARIO: data}).pipe(
      map( (data: any) => {
        return data
      })
    )
  }
  registroIniciarSeguimiento(data: any){
    return this.http.post(`${this.ruta}/registro/iniciar/seguimiento`, data)
  }
  registroSeguimientoStatus(data: any){
    return this.http.post(`${this.ruta}/registro/seguimiento/status`, data)
  }
  registroSeguimientoPrimerRespuesta(data: any){
    return this.http.post(`${this.ruta}/registro/seguimiento/p-respuesta`, data)
  }
  registroSeguimientoInformacion(data: any){
    return this.http.post(`${this.ruta}/registro/seguimiento/informacion`, data)
  }
  informacionTienda(data: any){
    return this.http.post(`${this.ruta}/tienda`, data)
  }
  cargartiendas(data: any){
    return this.http.post(`${this.ruta}/cargar/tiendas`, data)
  }
  cargarregistros(data: any){
    return this.http.post(`${this.ruta}/cargar/registros`, data)
  }

  busquedaEstado(data: any){
    // /busqueda/estado
    return this.http.post(`${this.ruta}/busqueda/estado`, {ESTADO: data})
  }
  busquedaTerritorio(data: any){
    // /busqueda/estado
    return this.http.post(`${this.ruta}/busqueda/territorio`, {TERRITORIO: data})
  }

}
