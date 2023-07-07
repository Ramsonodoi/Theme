import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private colorSubject!: BehaviorSubject<any>;
  public color!: Observable<any>;

  
  // color: string = '#3b82f6'
  
  
  
  constructor() {
    
  this.colorSubject = new BehaviorSubject('green');
  this.color = this.colorSubject.asObservable();
   }
  

  updateColor(color: string){
  this.colorSubject.next(color)
  }

 public get getColor() {
    return this.colorSubject.value
  }
}
