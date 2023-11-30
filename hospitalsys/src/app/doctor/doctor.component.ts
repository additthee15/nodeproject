import { Component, OnInit } from '@angular/core';
import {HospitalService} from '../hospital-service'
import { Doctor } from './doctor.model';
import {Router} from '@angular/router'

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  
  pwd:string = '';
  uname:string = ''
  errormsg : string = ''
  constructor(public hs:HospitalService,public router: Router){    // DI for ProductService 
  }

  ngOnInit(): void {
  }

  login(uname:string,pwd:string) {
    console.log('Inside method' + uname + pwd)
    
   this.hs.findDoctor(uname,pwd).subscribe({
    next:(result:any)=> {
    if(result == 'Doctor details found') {
      this.router.navigateByUrl('reports')
    }else {
      this.errormsg = result
    }
  },
  error:(error:any)=>console.log(error),
  complete:()=>
          {
            console.log("login done")
          }
})
}
 
}
