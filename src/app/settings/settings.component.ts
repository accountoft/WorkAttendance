import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { DataService } from '../data.service';
import { Router} from '@angular/router';
import { AppModule } from '../app.module';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

dataClient:any;
dataClientSecret:any;

  constructor(private _http: HttpService, private router: Router,private dataService: DataService) { }

  ngOnInit() {
    AppModule
  }

  findApiData(){
    
  }

}
