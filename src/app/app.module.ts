import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './heroes/list/list.component';
import { CounterModule } from './counter/counter.module';
import { HeroModule } from './heroes/hero.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HeroModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
