import { Component, OnInit } from '@angular/core';
import { AppModule } from '../app.module';
import { HttpService } from '../http.service';
import {MatCalendarCellClassFunction} from '@angular/material/datepicker';

@Component({
  selector: 'app-absences',
  templateUrl: './absences.component.html',
  styleUrls: ['./absences.component.scss']
})
export class AbsencesComponent implements OnInit {
Absences: any;
selected: Date | null=null;



  httpService: HttpService;

  constructor(private _http: HttpService) {
    this.httpService=_http;
   }
  ngOnInit() {
    AppModule
 
  }

  onSelectedDate(){
    console.log("dayf "+ this.selected?.toISOString());
  
    if(this.selected!=null){
      this.selected.setHours(0,0,0);
      var time=this.selected.toISOString();

      this.selected.setHours(23,59,59);
      var time2= this.selected.toISOString();
      console.log("time2: "+time+ "time3: "+time2);
      this.httpService.getAbsences(time,time2).subscribe(data => {console.log("data "+ data )
      this.Absences=data;
  }, error =>{}
    );
  }
}
onRefresh(){
  this.ngOnInit();
}



}
