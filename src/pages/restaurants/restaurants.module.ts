import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { CoreModule } from '../../app/shared/core/core.module';
import { RestaurantsPage } from './restaurants';

@NgModule({
  declarations: [
    RestaurantsPage,
  ],
  imports: [
    IonicPageModule.forChild(RestaurantsPage),
    CoreModule
  ],
})
export class RestaurantsPageModule {}
