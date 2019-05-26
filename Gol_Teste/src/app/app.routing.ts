import { RouterModule, Routes } from '@angular/router';
import {AddAirPlaneComponent} from "./add-airplane/add-airplane.component";
import {ListaAirPlaneComponent} from "./listar-airplane/lista-airplane.component";
import {EditaAirPlaneComponent} from "./editar-airplane/edita-airplane.component";

const routes: Routes = [  
  { path: 'add-airplane', component: AddAirPlaneComponent },
  { path: 'lista-airplane', component: ListaAirPlaneComponent },
  { path: 'edita-airplane', component: EditaAirPlaneComponent },
  {path : '', component : ListaAirPlaneComponent}
];

export const routing = RouterModule.forRoot(routes);
