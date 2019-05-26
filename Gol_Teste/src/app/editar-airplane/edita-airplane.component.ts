import { Component, OnInit } from '@angular/core';
import {AirPlaneService} from "../service/airplane.service";
import {Router} from "@angular/router";
import {AirPlane} from "../model/airPlane.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-edita-airplane',
  templateUrl: './edita-airplane.component.html',
  styleUrls: ['./edita-airplane.component.css']
})
export class EditaAirPlaneComponent implements OnInit {

  airPlane: AirPlane;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, private airPlaneService: AirPlaneService) { }

  ngOnInit() {
    let codigo = localStorage.getItem("editaAirPlaneCodigo");
    if(!codigo) {
      alert("Invalid action.")
      this.router.navigate(['lista-airplane']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [],
      email: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
    this.airPlaneService.listaAirPlanePorCodigo(+codigo)
      .subscribe( data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.airPlaneService.editarAirPlane(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['lista-airplane']);
        },
        error => {
          alert(error);
        });
  }

}
