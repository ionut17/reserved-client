import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { PipesModule } from '../../../../reServed-restaurant/src/app/shared/@pipes/pipes.module';
import { CoreModule } from '../../app/shared/core/core.module';
import { CustomFormsModule } from '../../app/shared/forms/forms.module';
import { ReservationConfirmationPage } from './reservation-confirmation';

@NgModule({
  declarations: [
    ReservationConfirmationPage
  ],
  imports: [
    IonicPageModule.forChild(ReservationConfirmationPage),
    CoreModule
  ],
})
export class ReservationConfirmationPageModule {}
