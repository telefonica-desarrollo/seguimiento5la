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
              tienda.SOCIO_COMERCIAL = row.getCell(16).value?.toString()
              tienda.TERRITORIO = row.getCell(1).value?.toString()
              tienda.ESTADO = row.getCell(33).value?.toString()

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
