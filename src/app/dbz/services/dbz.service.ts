import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({ providedIn: 'root' })

export class DbzService {
  public characters: Character[] = [{
    id: uuid(),
    nombre: 'Krilin',
    poder: 1222
  },
  {
    id: uuid(),
    nombre: 'Goku',
    poder: 100
  }
  ];

  onCharacter(character: Character): void {
    const newCharacter: Character = { id: uuid(), ...character };
    this.characters.push(newCharacter);
  }

  onDeleteCharacterById(id: string) {
    this.characters = this.characters.filter(character => character.id !== id);
  }
  //onDeleteCharacter(index: number)
  //this.characters.splice(index, 1);


  //constructor() { }

}
