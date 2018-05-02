import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Restaurant } from '../../../app/shared/@model';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { RestaurantService } from '../../../app/shared/@services';

@Component({
  selector: 'rs-restaurant-entry',
  templateUrl: './restaurant-entry.component.html'
})
export class RestaurantEntryComponent implements OnInit {

  @Input() restaurant: Restaurant;

  imagePath: SafeStyle = '';

  constructor(private sanitizer: DomSanitizer,
              private restaurantService: RestaurantService){}

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['restaurant']){
      const prop: string = `url(${this.restaurantService.getImagePath(this.restaurant.id)})`;
      this.imagePath = this.sanitizer.bypassSecurityTrustStyle(prop);
    }
  }

}
