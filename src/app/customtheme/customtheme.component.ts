
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customtheme',
  templateUrl: './customtheme.component.html',
  styleUrls: ['./customtheme.component.css']
})
export class CustomthemeComponent implements OnInit {
  color = 'rgba(255, 76, 48, 1)'
  currentColor: string = '#ff0000';
  rgbColor: string = 'rgba(255, 0, 0, 1)'

ngOnInit() {
  // console.log("color",this.currentColor)
  // this.rgbColor = this.hexToRgba(this.currentColor, 1)
}   

changeColor() {
  console.log("change detected")
  console.log("color on button",this.currentColor)
  console.log("rgb:", this.hexToRgba(this.currentColor, 1))
  this.rgbColor = this.hexToRgba(this.currentColor, 1)
}

hexToRgba(hex: string, alpha: number) {
  const r = parseInt(hex.slice(1, 3), 16);
  const  g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  
  if (alpha === undefined) {
    alpha = 1;
  }
  
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}


}
