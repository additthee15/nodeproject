import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../hospital-service';
import {Doctor} from '../doctor/doctor.model';

@Component({
  selector: 'app-doctorreports',
  templateUrl: './doctorreports.component.html',
  styleUrls: ['./doctorreports.component.css']
})
export class DoctorreportsComponent implements OnInit {
  doctorarr:Array<Doctor>=[];
  constructor(public hosserv : HospitalService) { }

  ngOnInit(): void {
    this.loadDoctorDetails()
  }
  loadDoctorDetails() {
    this.hosserv.getDoctors().subscribe({
      next:(result : any) => {
        this.doctorarr = result
        console.log(this.doctorarr)
      },
      error:(error : any) =>{
        console.log(error)
      },
      complete:() => {
        console.log("Doctor details loaded")
      }
    })
  }
}
