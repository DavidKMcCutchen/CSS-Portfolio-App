import { Component } from '@angular/core';

@Component({
  selector: 'css-portfolio-css-dense',
  templateUrl: './css-dense.component.html',
  styleUrls: ['./css-dense.component.scss'],
})
export class CssDenseComponent {
  randomNumber(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  };
};
