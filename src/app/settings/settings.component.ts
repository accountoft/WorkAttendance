import { Component, OnInit } from '@angular/core';
import { AppModule } from '../app.module';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AppModule
  }

}
