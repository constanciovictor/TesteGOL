import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AirPlane} from "../model/airplane.model";

@Injectable()
export class AirPlaneService {
  constructor(private http: HttpClient) { }
  Url: string = 'http://localhost:50567/api/airplane';

  listaAirPlanes() {
    return this.http.get<AirPlane[]>(this.Url);
  }

  listaAirPlanePorCodigo(Codigo: number) {
    return this.http.get<AirPlane>(this.Url + '/' + Codigo);
  }

  adicionarAirPlane(airPlane: AirPlane) {
    return this.http.post(this.Url, airPlane);
  }

  editarAirPlane(airPlane: AirPlane) {
    return this.http.put(this.Url + '/' + airPlane.Codigo, airPlane);
  }

  deletaAirPlane(Codigo: number) {
    return this.http.delete(this.Url + '/' + Codigo);
  }
}
