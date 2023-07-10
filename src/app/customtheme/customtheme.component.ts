import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customtheme',
  templateUrl: './customtheme.component.html',
  styleUrls: ['./customtheme.component.css']
})
export class CustomthemeComponent implements OnInit {
  currentColor: string = '#ff0000';
  rgbColor: string = 'rgba(255, 0, 0, 1)';

  ngOnInit() {
    this.rgbColor = this.hexToRgba(this.currentColor, 1);
  }

  changeColor() {
    console.log("change detected");
    console.log("color on button", this.rgbColor);
    console.log("rgb:", this.hexToRgba(this.rgbColor, 1));
    this.currentColor = this.rgbToHex(this.rgbColor);
  }

  hexToRgba(hex: string, alpha: number) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    if (alpha === undefined) {
      alpha = 1;
    }

    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  rgbToHex(rgb: string) {
    const match = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*\d+\.\d+)?\)$/);
    if (!match) {
      return '';
    }
    const r = parseInt(match[1], 10).toString(16).padStart(2, '0');
    const g = parseInt(match[2], 10).toString(16).padStart(2, '0');
    const b = parseInt(match[3], 10).toString(16).padStart(2, '0');
    return `#${r}${g}${b}`;
  }
}
