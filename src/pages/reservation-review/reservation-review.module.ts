import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { PipesModule } from '../../../../reServed-restaurant/src/app/shared/@pipes/pipes.module';
import { CoreModule } from '../../app/shared/core/core.module';
import { CustomFormsModule } from '../../app/shared/forms/forms.module';
import { ReservationReviewPage } from './reservation-review';

@NgModule({
  declarations: [
    ReservationReviewPage
  ],
  imports: [
    IonicPageModule.forChild(ReservationReviewPage),
    CoreModule,
    PipesModule,
    CustomFormsModule
  ],
})
export class ReservationReviewPageModule {}
