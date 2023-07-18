import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesTypeComponent } from './services-type/services-type.component';
import { AppointmentComponent } from './appointment/appointment.component';

const routes: Routes = [
  { path: 'services-type', component: ServicesTypeComponent },
  { path: 'appointment/:name/:description', component: AppointmentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }