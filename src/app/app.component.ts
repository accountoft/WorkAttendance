import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'workAttendance';
  name: any;


  constructor(
    private route: ActivatedRoute,
    private _dataService: DataService,
  ) {}

}
