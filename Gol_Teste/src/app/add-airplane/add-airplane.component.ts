import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AirPlaneService} from "../service/airplane.service";
import {first} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-airplane',
  templateUrl: './add-airplane.component.html',
  styleUrls: ['./add-airplane.component.css']
})
export class AddAirPlaneComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private airPlaneService: AirPlaneService) { }

  addForm: FormGroup;

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      Codigo: [],
      modelo: ['', Validators.required],
      qtdePassageiros: ['', Validators.required]      
    });

  }

  onSubmit() {
    this.airPlaneService.adicionarAirPlane(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['lista-airplane']);
      });
  }

}
