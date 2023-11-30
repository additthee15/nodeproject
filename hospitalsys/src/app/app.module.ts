import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorComponent } from './doctor/doctor.component';
import { FormsModule } from '@angular/forms';
import { DoctorreportsComponent } from './doctorreports/doctorreports.component';
import { DoctorregComponent } from './doctorreg/doctorreg.component';
import { PatientComponent } from './patient/patient.component';
import { PatientregComponent } from './patientreg/patientreg.component';
import { PatientrepComponent } from './patientrep/patientrep.component';
import { ReportsstatusComponent } from './reportsstatus/reportsstatus.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorComponent,
    DoctorreportsComponent,
    DoctorregComponent,
    PatientComponent,
    PatientregComponent,
    PatientrepComponent,
    ReportsstatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
