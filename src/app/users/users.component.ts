import { AppModule } from '../app.module';
import { HttpService } from '../http.service';
import { DataService } from '../data.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

httpService: HttpService;

  constructor(private _http: HttpService) {
    this.httpService=_http;
   }

  ngOnInit() {
    AppModule;
    console.log('Init came');
    this.httpService.getUsers().subscribe(data => {console.log("data "+data)}, error =>{});
    console.log('Init came');
  }

}
