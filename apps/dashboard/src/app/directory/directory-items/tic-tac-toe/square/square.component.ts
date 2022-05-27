import { Component, Input } from '@angular/core';

@Component({
  selector: 'css-portfolio-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss'],
})
export class SquareComponent {

  @Input() value: 'X' | 'O';
}
