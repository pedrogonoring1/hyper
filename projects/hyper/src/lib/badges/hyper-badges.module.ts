import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HyperBadgesComponent } from './components/hyper-badges.component';


@NgModule({
  declarations: [
    HyperBadgesComponent,
  ],
  imports : [
    CommonModule
  ],
  exports: [
    HyperBadgesComponent
  ]
})
export class HyperBagdesModule { }
