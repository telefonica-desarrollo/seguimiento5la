import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  informacionTienda = {ID_TIENDA: " ", NOMBRE_TIENDA: ""}
  constructor(private service: ServicesService) {
    this.informacionTienda.ID_TIENDA = localStorage.getItem("ID_TIENDA") || ""
    this.service.informacionTienda(this.informacionTienda).subscribe((res: any) => {
      this.informacionTienda.NOMBRE_TIENDA = res.NOMBRE_TIENDA
      localStorage.setItem("NOMBRE_TIENDA", res.NOMBRE_TIENDA)
    })
   }

  ngOnInit(): void {
  }

}
