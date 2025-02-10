import { DbzService } from './../services/dbz.service';
import { Component, OnInit } from '@angular/core';
import { ListComponent } from '../components/list/list.component';
import { AddCharacterComponent } from '../components/add-character/add-character.component';
import { Character } from '../interfaces/character.interface';

@Component({

  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  imports: [ListComponent,AddCharacterComponent],

})

export class MainPageComponent {

constructor(private dbzservice:DbzService){}

get characters(): Character[]{
  return (this.dbzservice.characters)
}

onDeleteCharacter(id:string){
  this.dbzservice.deleteCharacterbyId(id);
}

onNewCharacter(character:Character){
  this.dbzservice.addCharacter(character);
}


}
