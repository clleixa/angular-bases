import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { counterModule } from './counter/counter.module';
import { heroesModule } from './heroes/heroes.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './dbz/pages/main-page.component';
import { FormsModule } from '@angular/forms';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    counterModule,
    heroesModule,
    FormsModule,
    MainPageComponent,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
