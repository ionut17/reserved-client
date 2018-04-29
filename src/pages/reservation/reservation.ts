import { Component, OnInit, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import * as moment from 'moment';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Reservation, ReservationStatus, Restaurant, Client } from '../../app/shared/@model';
import { ClientManagerService, ReservationService } from '../../app/shared/@services';
import { ReservationReviewPage } from '../reservation-review/reservation-review';

@IonicPage()
@Component({
  selector: 'page-reservation',
  templateUrl: 'reservation.html',
})
export class ReservationPage implements OnInit {

  @ViewChild(Content) content: Content;

  currentDate: moment.Moment;
  reservationForm: FormGroup;
  restaurant: Restaurant;

  private client: Client;

  get minTime():moment.Moment{
    const selectedDate: moment.Moment = moment(this.reservationForm.value.date);
    return selectedDate.isValid() && !selectedDate.isSame(this.currentDate, 'days') ? selectedDate : this.currentDate;
  }

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private clientManagerService: ClientManagerService,
              private reservationService: ReservationService) {
    this.restaurant = navParams.get('restaurant');
    this.client = this.clientManagerService.getClient();
  }

  ngOnInit(){
    this.initializeForm();
  }

  ionViewWillEnter() {
    this.currentDate = moment();
    this.content.scrollToTop();
  }

  initializeForm(){
    this.reservationForm = new FormGroup({
      'people': new FormControl(null, [Validators.required, Validators.min(1), Validators.max(9)]),
      'date': new FormControl(null, Validators.required),
      'time': new FormControl(null, Validators.required)
    });
  }

  onSubmit(){
    if (this.reservationForm.valid){
      //Build reservation object
      const clientId: string = this.client.id;
      const chosenDate: moment.Moment = moment(this.reservationForm.value.date);
      chosenDate.hours(this.reservationForm.value.time.slice(0,2));
      chosenDate.minutes(this.reservationForm.value.time.slice(3,5));
      const reservation: Reservation = {
        id: null,
        clientId: clientId,
        restaurantId: this.restaurant.id,
        startTime: chosenDate.toISOString(),
        endTime: null,
        status: ReservationStatus.Pending,
        people: this.reservationForm.value.people,
        tables: []
      };
      //Go to review page
      this.navCtrl.push(ReservationReviewPage, {
        "reservation": reservation
      });

    } else{
      Object.keys(this.reservationForm.controls).forEach((key: string)=>{
        this.reservationForm.controls[key].markAsTouched();
      });
    }
  }

}
