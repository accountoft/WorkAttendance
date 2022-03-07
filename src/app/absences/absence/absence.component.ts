import { Component, Input, OnInit } from '@angular/core';
import { AppModule } from 'src/app/app.module';


@Component({
  selector: 'app-absence',
  templateUrl: './absence.component.html',
  styleUrls: ['./absence.component.scss']
})
export class AbsenceComponent implements OnInit {
  @Input() FirstName: string = "";
  @Input() LastName: string = "";
  @Input() Timestamp: string = "";
  @Input() AbsenceDefinitionName: string="";


  constructor() { }

  ngOnInit(){
    AppModule
  }

}
