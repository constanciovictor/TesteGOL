import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//import { LoginComponent } from './login/login.component';
import {routing} from "./app.routing";
import {AuthenticationService} from "./service/auth.service";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { AddAirPlaneComponent } from './add-airplane/add-airplane.component';
import { EditaAirPlaneComponent } from './editar-airplane/edita-airplane.component';
import {ListaAirPlaneComponent} from "./listar-airplane/lista-airplane.component";
import {AirPlaneService} from "./service/airplane.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CustomMaterialModule} from "./material.module";

@NgModule({
  declarations: [
    AppComponent,
    //LoginComponent,
    ListaAirPlaneComponent,
    AddAirPlaneComponent,
    EditaAirPlaneComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CustomMaterialModule
  ],
  providers: [AuthenticationService, AirPlaneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
