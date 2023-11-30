import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../hospital-service';

@Component({
  selector: 'app-patientrep',
  templateUrl: './patientrep.component.html',
  styleUrls: ['./patientrep.component.css']
})
export class PatientrepComponent implements OnInit {
  phone :string = ''
  patdet : any
  constructor(public hospservice : HospitalService) { }

  ngOnInit(): void {
  }
  getPatientdetails(phnumber:string) {
    this.hospservice.getPatient(phnumber).subscribe({
      next:(res:any) =>{
        console.log(res)
        this.patdet = res
      },
      error:(err:any) =>{
        console.log(err)
      }
    })
  }
}
