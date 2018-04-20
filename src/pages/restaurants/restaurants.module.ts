import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { CoreModule } from '../../app/shared/core/core.module';
import { RestaurantsPage } from './restaurants';
import { RestaurantEntryComponent } from './restaurant-entry/restaurant-entry.component';

@NgModule({
  declarations: [
    RestaurantsPage,
    RestaurantEntryComponent
  ],
  imports: [
    IonicPageModule.forChild(RestaurantsPage),
    CoreModule
  ],
})
export class RestaurantsPageModule {}
