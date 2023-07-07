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
      this.theme.color.subscribe(value=>{
       this.color = value
      //  console.log(value, "coloy")
      })
   }


   changeColor() {
     console.log(this.selectedColor, "sel")
    this.theme.updateColor(this.selectedColor)
  }
  }
  