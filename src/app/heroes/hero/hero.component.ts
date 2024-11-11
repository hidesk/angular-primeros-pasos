import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }
  //Va a mandar a invocar para regresar los valores
  getHeroDescription():string {
    return `${this.name} - ${this.age}`;

  }

  changeHero(): void{
    this.name = 'Spiderman';

  }

  changeAge(): void{
    this.age = 30;

  }
  resetForm():void{
  this.age = 45;
  this.name = 'ironman'

/* Tener cuidado con este tipo de codigos y cambiar todo de la Clase y los Metodos
 */  /* document.querySelectorAll('h1')!.forEach( element =>{
    element.innerHTML = '<h1>Desde Angular</h1>' */

  }


}
