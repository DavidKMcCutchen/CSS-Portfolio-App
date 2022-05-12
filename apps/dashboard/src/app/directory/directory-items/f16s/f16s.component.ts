import { Component } from '@angular/core';

@Component({
  selector: 'css-portfolio-f16s',
  templateUrl: './f16s.component.html',
  styleUrls: ['./f16s.component.scss'],
})
export class F16sComponent {
  randomNumber(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  };
};
