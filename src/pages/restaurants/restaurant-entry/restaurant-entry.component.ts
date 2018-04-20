import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from '../../../app/shared/@model';

@Component({
  selector: 'rs-restaurant-entry',
  templateUrl: './restaurant-entry.component.html'
})
export class RestaurantEntryComponent implements OnInit {

  @Input() restaurant: Restaurant;

  ngOnInit() {
  }

}
