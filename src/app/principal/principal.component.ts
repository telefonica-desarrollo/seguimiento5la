import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(private service: ServicesService) {
  }

  ngOnInit(): void {
  }

  

}
