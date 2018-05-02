import { Component } from '@angular/core';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RestaurantService, ClientManagerService } from '../../app/shared/@services';
import { Restaurant } from '../../app/shared/@model';
import { baseAnimation } from '../../app/shared/@model';

@IonicPage()
@Component({
  selector: 'page-restaurants',
  templateUrl: 'restaurants.html',
})
export class RestaurantsPage {

  restaurants: Restaurant[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private sanitizer: DomSanitizer,
              private restaurantService: RestaurantService,
              private clientManagerService: ClientManagerService) {
  }

  ngOnInit(){
    this.restaurantService.getAll().subscribe((result: Restaurant[])=>{
      this.restaurants = result;
    });
  }

  onSelectRestaurant(restaurant: Restaurant){
    this.navCtrl.push('ReservationPage', {
      "restaurant": restaurant
    }, baseAnimation);
  }

}
