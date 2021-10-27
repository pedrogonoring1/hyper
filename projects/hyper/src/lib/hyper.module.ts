import { NgModule } from '@angular/core';
import { HyperBagdesModule } from './badges';
import { HyperStepsModule } from './steps';


@NgModule({
  imports: [
    HyperStepsModule,
    HyperBagdesModule,
  ],
  exports: [
    HyperStepsModule,
    HyperBagdesModule,
  ],

})
export class HyperModule {}
