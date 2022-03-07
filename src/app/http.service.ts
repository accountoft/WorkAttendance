import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { UserClass } from './users/user/userclass.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};
const Options = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
  })
  export class HttpService {

    constructor(private http: HttpClient) { }
  
setAuthentication(client_id: string, client_secret: string){

  var access_response: any;

  const body= new HttpParams()
    .set('client_id',client_id)
    .set('client_secret',client_secret)
    .set('grant_type','client_credentials')
    .set('scope','api')
   
    access_response=this.http.post('https://login.allhours.com/connect/token',
    body.toString(),httpOptions
  ).subscribe(data =>{
    localStorage.setItem("my_at",JSON.stringify(data))
  },err=>{console.log(err) })

  
;

}

SetLogin(access_token: string){
const body=new HttpParams()
.set('Authorization',access_token)
.set('Content-Type',"application/json")



}

AddNewUser(user: UserClass){

   this.http.post('https://api4.allhours.com/api/v1/Users',
    user, Options
  ).subscribe(data =>{
  },err=>{console.log(err) })
}

    getUsers(){
     
      return this.http.get('https://api4.allhours.com/api/v1/Users',Options)
    }

  
    getAbsences(date: string,date1: string){
      
      return this.http.get('https://api4.allhours.com/api/v1/Absences?dateFrom='+date+'&dateTo='+date1,Options)

      
    }

    getAbsenceDefinitions(){
      
      return this.http.get('https://api4.allhours.com/api/v1/AbsencesDefinitions',Options)

      
    }
  
    
  }