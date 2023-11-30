import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../hospital-service';
import { Patient } from './patientmodel';

@Component({
  selector: 'app-reportsstatus',
  templateUrl: './reportsstatus.component.html',
  styleUrls: ['./reportsstatus.component.css']
})
export class ReportsstatusComponent implements OnInit {
  patdet:Array<Patient>=[]
  status: string = ''
  constructor(public hospservice:HospitalService) { }

  ngOnInit(): void {
  }
  getPatientdetails(status:string){
    console.log(status)
    this.hospservice.getPatients(status).subscribe({
      next:(res =>{
        console.log(res)
        res.forEach(p =>{
          this.patdet.push(p)
        })
      }),
      error:(err =>{
        console.log(err)
      })
    })
  }
}
