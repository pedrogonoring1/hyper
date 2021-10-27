import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HyperModule } from 'projects/hyper-angular';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HyperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
