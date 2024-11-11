import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-counter',
  template: `
<!--   <h1>Hola Counter</h1> -->


  <h3>Counter: {{counter}}</h3>

<!--
Forma que funciona con dos funciones diferentes
<button (click)="increaseBy(-1)">-1</button>
<button (click)="decreaseBy(1)">+1</button> -->

<!-- Forma correcta de realizarlo -->
<button (click)="increaseBy(+1)">+1</button>
<button (click)="resetCounter()">Reset</button>
<button (click)="increaseBy(-1)">-1</button>`
})

export class CounterComponent {
  public counter: number = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }
  resetCounter():void{
    this.counter =10;
  }
  constructor() {
   }


}
