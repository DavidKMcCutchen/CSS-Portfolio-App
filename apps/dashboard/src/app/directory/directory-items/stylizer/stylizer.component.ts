import { Component } from '@angular/core';

@Component({
  selector: 'css-portfolio-stylizer',
  templateUrl: './stylizer.component.html',
  styleUrls: ['./stylizer.component.scss'],
})
export class StylizerComponent {

  getValues(){
    const c1 = (<HTMLInputElement>document.getElementById('color1')).value;
    const c2 = (<HTMLInputElement>document.getElementById('color2')).value;
    const linearGradient = `linear-gradient(${c1}, ${c2})`;
    console.log('Background Changed to:', linearGradient);
  

    return (<HTMLInputElement>document.getElementById('body')).style.background = linearGradient;
  };

  resetScheme() {
    return (<HTMLInputElement>document.getElementById('body')).style.background = "none";
  };
  
  flip() {
    const flipMe = document.getElementById('flipMe');
    flipMe?.classList.toggle('flipper');
  };

  }

  


