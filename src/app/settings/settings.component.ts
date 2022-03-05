import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { DataService } from '../data.service';
import { Router} from '@angular/router';
import { AppModule } from '../app.module';
import { FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  SaveForm: any = {
    dataClientId:'',
    dataClientSecret:''
  }; 


httpServiceTs: HttpService;

  constructor(private _http: HttpService, private router: Router,private dataService: DataService) { 
    this.httpServiceTs=_http;
    

  }

  ngOnInit() {
    AppModule;
 
  }


   onSave(){
    const { dataClientId, dataClientSecret } = this.SaveForm;
   
   
      this.httpServiceTs.setAuthentication(dataClientId,dataClientSecret)
    
  }
}
