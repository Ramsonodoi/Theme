import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-customnavbar',
  templateUrl: './customnavbar.component.html',
  styleUrls: ['./customnavbar.component.css']
})
export class CustomnavbarComponent implements OnInit {
    color: string = ''
    selectedColor: string = '#FFA500'
  constructor(private theme: ThemeService){

  }

  ngOnInit(): void {
    const storedColor = localStorage.getItem('selectedColor');
      this.theme.color.subscribe(value=>{
      //  this.color = value
      this.color = storedColor || '';
      //  console.log(value, "coloy")
      })
   }

  


  //  changeColor() {
  //    console.log(this.selectedColor, "sel")
  //   this.theme.updateColor(this.selectedColor)
  // }

  changeColor() {
    this.color = this.selectedColor;
    localStorage.setItem('selectedColor', this.selectedColor);
    console.log(this.color, "pop")
  }
  }
  