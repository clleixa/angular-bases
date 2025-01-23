import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { counterModule } from './counter/counter.module';
import { heroesModule } from './heroes/heroes.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    counterModule,
    heroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
