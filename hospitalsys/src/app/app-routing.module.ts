import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorComponent } from './doctor/doctor.component';

import { DoctorreportsComponent } from './doctorreports/doctorreports.component';
import { DoctorregComponent } from './doctorreg/doctorreg.component';
import { PatientComponent } from './patient/patient.component';
import { PatientregComponent } from './patientreg/patientreg.component';
import { PatientrepComponent } from './patientrep/patientrep.component';
import { ReportsstatusComponent } from './reportsstatus/reportsstatus.component';
const routes: Routes = [
  {path:'drlogin',component:DoctorComponent},
  {path:'reports',component:DoctorreportsComponent},
  {path:'docreg',component:DoctorregComponent},
  {path:'patlogin',component:PatientComponent},
  {path:'patreg',component:PatientregComponent},
  {path:'patrep',component:PatientrepComponent},
  {path:'statusreports',component:ReportsstatusComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
