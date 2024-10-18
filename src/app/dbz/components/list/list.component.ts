import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterLit: Character[] = [{
    nombre: 'Trunks', poder: 10
  }];

  // onDelete: Index Value: Number
  @Output()
  public onDelete = new EventEmitter<string>();


  onDeleteCharacterById(id?: string): void {
    //Emitir ID que es el identificador del character
    if (!id) return;
    this.onDelete.emit(id);
    //console.log(index);
  }
}
