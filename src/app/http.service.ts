import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
  })
  export class HttpService {

    constructor(private http: HttpClient) { }
  
    getUsers(){
      return this.http.get('https://api4.allhours.com/api/v1/Users')
    }
  
    getAbsences(term:String){
      return this.http.get(' https://api4.allhours.com/api/v1/Absences')
    }
  
    
  }