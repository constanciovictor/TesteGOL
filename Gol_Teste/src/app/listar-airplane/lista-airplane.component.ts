import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AirPlaneService} from "../service/airplane.service";
import {AirPlane} from "../model/airplane.model";

@Component({
  selector: 'app-lista-airplane',
  templateUrl: './lista-airplane.component.html',
  styleUrls: ['./lista-airplane.component.css']
})
export class ListaAirPlaneComponent implements OnInit {

  airPlanes: AirPlane[];

  constructor(private router: Router, private airPlaneService: AirPlaneService) { }

  ngOnInit() {
    this.airPlaneService.listaAirPlanes()
      .subscribe( data => {
        this.airPlanes = data;
      });
  }

  deleteAirPlane(airPlane: AirPlane): void {
    this.airPlaneService.deletaAirPlane(airPlane.Codigo)
      .subscribe( data => {
        this.airPlanes = this.airPlanes.filter(x => x !== airPlane);
      })
  };

  editaAirPlane(airPlane: AirPlane): void {
    localStorage.removeItem("editaAirPlaneCodigo");
    localStorage.setItem("editaAirPlaneCodigo", airPlane.Codigo.toString());
    this.router.navigate(['edita-airplane']);
  };

  addAirPlane(): void {
    this.router.navigate(['add-airplane']);
  };
}
