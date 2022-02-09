import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import * as Exceljs from "exceljs"

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.css']
})
export class CargaComponent implements OnInit {

  constructor(private service: ServicesService) { }

  registrosCargados = 0;
  lineasDocumento = 0;
  lineasNumeroCorrecto = 0;
  Registros: any = []
  cargando: boolean = false

  tiendasCargadas = 0;
  Tiendas: any = []


  ngOnInit(): void {
  }

  leerArchivo(event: any){
    this.cargando = true
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.readAsArrayBuffer(file)
    reader.onload = () => {
      const buffer: any = reader.result;
      let woorkbook = new Exceljs.Workbook();
      
      woorkbook.xlsx.load(buffer).then((err)=>{
        var woorksheet = woorkbook.getWorksheet(0);
        woorksheet.eachRow((row, rowNumber) => {
          if(rowNumber>1){
            const dn =  row.getCell(18).value
            this.lineasDocumento++
          }
        })
      }).finally(()=>{
        console.log(this.lineasDocumento);
        this.cargando = false
      })
    }
    
  }
  guardar(){
    
  }
  //Para tiendas
  leerArchivoTiendas(event: any){
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.readAsArrayBuffer(file)
    reader.onload = () => {
      const buffer: any = reader.result;
      let woorkbook = new Exceljs.Workbook();
      
      woorkbook.xlsx.load(buffer).then((err)=>{
        var woorksheet = woorkbook.getWorksheet("DIRECTORIO TIENDAS");
        woorksheet.eachRow((row, rowNumber) => {
          if(rowNumber>1){
            const id =  row.getCell(13).value
            if(id){
              let tienda: any = {}
              tienda.IDPDV = id
              tienda.NOMBRE_TIENDA = row.getCell(15).value?.toString()
              this.Tiendas.push(tienda)
            }
          }
        })
      }).catch(()=> {})
    }
  }
  guardarTiendas(){
    console.log(this.Tiendas);
    
    this.Tiendas.forEach((tienda: any) => {
      this.service.cargartiendas(tienda).subscribe((res) => {
        if(res) this.tiendasCargadas++
      })
    })
  }

}
