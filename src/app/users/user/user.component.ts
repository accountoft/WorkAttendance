import { Component, Input, OnInit } from '@angular/core';
import { UserClass } from './userclass.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
 @Input() firstName: string = "";
  @Input() lastName: string = "";



 

  constructor() { }


  ngOnInit(): void {
  }

}
