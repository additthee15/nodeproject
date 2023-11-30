import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../hospital-service';

@Component({
  selector: 'app-doctorreg',
  templateUrl: './doctorreg.component.html',
  styleUrls: ['./doctorreg.component.css']
})
export class DoctorregComponent implements OnInit {
  message : string = ''
  constructor(public hospservice:HospitalService) { }

  ngOnInit(): void {
  }
  registerDoc(data : any) {
    console.log(data)
    this.hospservice.registerDoctors(data).subscribe({
      next:(result : any)=> {
        console.log(result)
        this.message = result
      },
      error:(err : any) =>{
        this.message = err
      },
      complete:() =>{
        console.log('Registration doone')
      }
    })
}
}