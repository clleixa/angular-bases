import { Component,EventEmitter,Input,Output} from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dbz-list',
  imports:[CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
}
)
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name:"Trunks",
    power:10,

  }]

  @Output()
  public OnDelete:EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?:string){
    if (!id ) return;
    this.OnDelete.emit(id);
  }
 }
