import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../hospital-service';

@Component({
  selector: 'app-patientreg',
  templateUrl: './patientreg.component.html',
  styleUrls: ['./patientreg.component.css']
})
export class PatientregComponent implements OnInit {
  message : string = ''
  constructor(public hospserv:HospitalService) { }

  ngOnInit(): void {
  }
  registerPatient(patform:any){
    console.log(patform)
    this.hospserv.registerPatient(patform).subscribe({
      next:(result:any) =>{
        console.log(result)
        this.message= result
      },
      error:(err:any) =>{
        console.log(err)
      }
    })
  }
}
