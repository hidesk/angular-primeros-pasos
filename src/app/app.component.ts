import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Mi Primera App de Angular';
  //Mejora la Legibidad
  //public title: string = 'Hola Mundo';

  public counter: number = 10;

  //Forma que tiene mas codigo pero funciona
  //increaseBy(): void{
  //  this.counter += 1;
  //}//

  decreaseBy(): void{
      this.counter -= 1;
    }

  //Forma correcta de realizarlo
  increaseBy(value: number): void {
    this.counter += value;
  }
  resetCounter():void{
    this.counter =10;
  }

}

