import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as moment from 'moment';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Reservation, ReservationStatus, Restaurant, Client } from '../../app/shared/@model';
import { ClientManagerService, ReservationService } from '../../app/shared/@services';

@IonicPage()
@Component({
  selector: 'page-reservation',
  templateUrl: 'reservation.html',
})
export class ReservationPage implements OnInit {

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
      let chosenDate: moment.Moment = moment(this.reservationForm.value.date);
      chosenDate.hours(this.reservationForm.value.time.slice(0,2));
      chosenDate.minutes(this.reservationForm.value.time.slice(3,5));

      const reservation: Reservation = {
        id: null,
        clientId: this.client.id,
        restaurantId: this.restaurant.id,
        startTime: chosenDate.toDate(),
        endTime: null,
        status: ReservationStatus.Pending,
        people: this.reservationForm.value.people,
        tables: []
      };
      console.log(reservation);
      this.reservationService.post(reservation).subscribe((res) => {
        console.log(res);
      });
    } else{
      Object.keys(this.reservationForm.controls).forEach((key: string)=>{
        this.reservationForm.controls[key].markAsTouched();
      });
    }
  }

}
