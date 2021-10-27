import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'

import { HyperStepsComponent } from './components/hyper-steps.component';
import { StatusStepsComponent } from './components/status-steps/status-steps.component';
import { PagesStepsComponent } from './components/pages-steps/pages-steps.component';
import { ButtonsControlersStepsComponent } from './components/buttons-controlers-steps/buttons-controlers-steps.component';


@NgModule({
  declarations: [
    HyperStepsComponent,
    StatusStepsComponent,
    PagesStepsComponent,
    ButtonsControlersStepsComponent,
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    HyperStepsComponent
  ]
})
export class HyperStepsModule { }
