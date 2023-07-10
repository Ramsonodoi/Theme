import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private colorSubject!: BehaviorSubject<any>;
  public color!: Observable<any>;

  private localStorageKey = 'selectedColor';

  
  // color: string = '#3b82f6'
  
  
  
  constructor() {
   const storedColor = localStorage.getItem(this.localStorageKey) 
  this.colorSubject = new BehaviorSubject('green');
  this.color = this.colorSubject.asObservable();
   }
  

  updateColor(color: string){
  this.colorSubject.next(color)
  localStorage.setItem(this.localStorageKey, color)
  }

getColor(): string {
    return this.colorSubject.value
  }
}



export function initializeThemeService(themeService: ThemeService) {
  return () => {
    return new Promise<void>((resolve) => {
      themeService.color.subscribe(() => {
        resolve();
      });
    });
  };
}
