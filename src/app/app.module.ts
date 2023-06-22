import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CounterModule } from './counter/components/counter/counter.module';
import { HeroesModule } from './heroes/components/heroes/heroes.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { DbzModule } from './dbz/dbz.module';




@NgModule({
  declarations: [
    AppComponent,

 // nombre de la clase del archivo .ts

  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule,
    DbzModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
