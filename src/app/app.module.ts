import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { CoreModule } from './shared/core';
import { ReservationPageModule } from '../pages/+reservation/reservation.module';
import { RestaurantsPageModule } from '../pages/restaurants/restaurants.module';
import { RestaurantService, ReservationService, ClientService, ClientManagerService } from './shared/@services';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    CoreModule,
    RestaurantsPageModule,
    ReservationPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestaurantService,
    ReservationService,
    ClientService,
    ClientManagerService
  ]
})
export class AppModule {}
