import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HyperModule } from '../../../hyper/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HyperModule.forRoot('inline'),
    FormsModule,
    ReactiveFormsModule,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
