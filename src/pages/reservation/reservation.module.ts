import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { CoreModule } from '../../app/shared/core/core.module';
import { ReservationPage } from './reservation';
import { CustomFormsModule } from '../../app/shared/forms/forms.module';

@NgModule({
  declarations: [
    ReservationPage
  ],
  imports: [
    IonicPageModule.forChild(ReservationPage),
    CoreModule,
    CustomFormsModule
  ],
})
export class ReservationPageModule {}
