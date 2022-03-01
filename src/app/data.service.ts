import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  private searchTerm = new BehaviorSubject('');
  currentTerm = this.searchTerm.asObservable();

  constructor() { }

  changeMessage(message: any) {
    this.messageSource.next(message)
  }

  changeSearch(term: string){
    this.searchTerm.next(term);
  }

}