import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../hospital-service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  uname:string = '';
  pwd:string = '';
  errormsg : string = ''
  constructor(public hospserv:HospitalService,public router: Router) { }

  ngOnInit(): void {
  }
  login(uname:string,pwd:string) {
    console.log(uname + pwd)
    this.hospserv.findPatient(uname,pwd).subscribe({
      next:(result:any) =>{
        console.log(result)
        if(result=='Patient found') {
          this.router.navigateByUrl('patrep')
        }
        else {
          this.errormsg = result
        }
      },
      error:(err:any) =>{
        console.log(err)
      }
    })
  }
}
