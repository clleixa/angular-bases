import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { ListComponent } from './components/list/list.component';


@NgModule({
  declarations:[],
  imports: [CommonModule,MainPageComponent,FormsModule,AddCharacterComponent,ListComponent],
  exports: [MainPageComponent]
})
export class DbzModule { }
