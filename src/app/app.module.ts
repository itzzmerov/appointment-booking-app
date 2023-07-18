import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesListComponent } from './services-list/services-list.component';
import { ServicesTypeComponent } from './services-type/services-type.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { InfoFormComponent } from './info-form/info-form.component';
import { SummaryComponent } from './summary/summary.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { HttpClientModule } from '@angular/common/http';

import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: ServicesListComponent },
  { path: 'services-type', component: ServicesTypeComponent },
  { path: 'appointment', component: AppointmentComponent },
  { path: 'info-form', component: InfoFormComponent },
  { path: 'summary', component: SummaryComponent },
  { path: 'receipt', component: ReceiptComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ServicesListComponent,
    ServicesTypeComponent,
    AppointmentComponent,
    InfoFormComponent,
    SummaryComponent,
    ReceiptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
