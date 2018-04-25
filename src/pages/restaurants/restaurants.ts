import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestaurantService, ClientManagerService } from '../../app/shared/@services';
import { Restaurant } from '../../app/shared/@model';

/**
 * Generated class for the RestaurantsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-restaurants',
  templateUrl: 'restaurants.html',
})
export class RestaurantsPage {

  restaurants: Restaurant[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
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
    })
  }

}
