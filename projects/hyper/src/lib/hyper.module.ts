import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'

import { HyperStepsComponent } from './hyper-steps/page/hyper-steps.component';
import { StatusStepsComponent } from './hyper-steps/components/status-steps/status-steps.component';
import { PagesStepsComponent } from './hyper-steps/components/pages-steps/pages-steps.component';
import { ButtonsControlersStepsComponent } from './hyper-steps/components/buttons-controlers-steps/buttons-controlers-steps.component';
import { HyperBadgesComponent } from './hyper-badges/hyper-badges.component';


@NgModule({
  declarations: [
    HyperStepsComponent,
    StatusStepsComponent,
    PagesStepsComponent,
    ButtonsControlersStepsComponent,
    HyperBadgesComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    HyperStepsComponent, HyperBadgesComponent
  ]
})
export class HyperModule { }
