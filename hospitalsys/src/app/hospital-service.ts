import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DoctorLogin } from '../app/doctor/doctorlogin.model';
import { Doctor } from './doctor/doctor.model';
import { PatientLogin } from './patient/patientloginmodel';
import { HttpParams } from '@angular/common/http';
import { Patient } from './reportsstatus/patientmodel';

@Injectable({
    providedIn: 'root'
  })
export class HospitalService {
    doclog : DoctorLogin | undefined;
    patientlogin : PatientLogin | undefined;

    constructor(public http:HttpClient) { }   //DI for HttpClient 
    baseUrl:string ="http://localhost:8080/hospital";

    findDoctor(uname:string,pwd:string):Observable<string>{
        console.log('inside srvie ' + pwd)
        this.doclog = new DoctorLogin(uname,pwd)
        return this.http.post(this.baseUrl+"/doclogin",this.doclog,{responseType:'text'})
    }

    getDoctors():Observable<any> {
        return this.http.get(this.baseUrl + "/getdocs",{responseType:'json'})
    }

    registerDoctors(doc : any):Observable<any> {
        return this.http.post(this.baseUrl + "/postdocdet" , doc,{responseType:'text'})
    }

    findPatient(uname:string,pwd:string):Observable<string>{
        this.patientlogin = new PatientLogin(uname,pwd)
        return this.http.post(this.baseUrl + "/patlogin",this.patientlogin,{responseType:'text'})
    }

    registerPatient(patinet : any):Observable<any> {
        return this.http.post(this.baseUrl + "/postpat" , patinet,{responseType:'text'})
    }

    getPatient(phone:string):Observable<any>{
        let queryParams = new HttpParams().append("phone",phone)
        
        return this.http.get(this.baseUrl + "/getpat" ,{params:queryParams})
    }

    getPatients(status:string):Observable<Patient[]>{
        let queryParams = new HttpParams().append("status",status)
        
        return this.http.get<Patient[]>(this.baseUrl + "/getpatstatus" ,{params:queryParams})
    }
}