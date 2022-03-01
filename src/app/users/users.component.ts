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

  constructor() { }

  ngOnInit() {
    AppModule
  }

}
