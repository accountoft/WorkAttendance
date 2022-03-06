import { AppModule } from '../app.module';
import { HttpService } from '../http.service';
import { DataService } from '../data.service';
import { Component, OnInit } from '@angular/core';
import { UserClass } from './user/userclass.model';
import * as uuid from 'uuid';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
 
  Users: any;
 

  AddUserForm: any = {
    newUserFirstName:'',
    newUserLastName:''
  }; 

 

httpService: HttpService;

  constructor(private _http: HttpService) {
    this.httpService=_http;
   }

  ngOnInit() {
    AppModule;
   
    this.httpService.getUsers().subscribe(data => {console.log("data "+ data )
    this.Users=data;
  }, error =>{});
  
  }

  onAddUser(){
    
    const{ newUserFirstName,newUserLastName}= this.AddUserForm;

    var user: UserClass = 
      new UserClass(uuid.v4(),newUserFirstName,newUserLastName,false,false,false,false);

    this.httpService.AddNewUser(user)
  }
 


}
