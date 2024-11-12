import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public character: Character []= [{
    id: uuidv4(),
    name: 'Krillin',
    power: 1000
  },{
    id: uuidv4(),
    name: 'Goku',
    power: 9500
  },{
    id: uuidv4(),
    name: 'Vegeta',
    power: 7500
  }];

  /* onNewCharacter(character: Character): void{
    const newCharacter: Character ={
      id: uuidv4(),
      name: character.name,
      power: character.power
    }
    this.character.push(character);

  } De manera desestructurada y completa*/
    onNewCharacter(character: Character): void{
      const newCharacter: Character ={id: uuidv4(),...character};

      this.character.push(newCharacter);

    }
  /* onDeleteCharacter(index: number):void {
    this.character.splice(index,1); */
    deleteCharacterById(id:string){
      this.character = this.character.filter(character => character.id !== id)
  }


}
