import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as moment from 'moment';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReservationDto, ReservationStatus } from '../../app/shared/@model';

@IonicPage()
@Component({
  selector: 'page-reservation',
  templateUrl: 'reservation.html',
})
export class ReservationPage implements OnInit {

  currentDate: moment.Moment;
  reservationForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit(){
    this.initializeForm();
  }

  ionViewWillEnter() {
    this.currentDate = moment();
    console.log('ionViewDidLoad RestaurantsPage');
  }

  initializeForm(){
    this.reservationForm = new FormGroup({
      'people': new FormControl(null, [Validators.required, Validators.min(1), Validators.max(9)]),
      'date': new FormControl(null, Validators.required),
      'time': new FormControl(null, Validators.required)
    });
  }

  onSubmit(){
    let chosenDate: moment.Moment = moment(this.reservationForm.value.date);
    chosenDate.hours(this.reservationForm.value.time.slice(0,2));
    chosenDate.minutes(this.reservationForm.value.time.slice(3,5));

    const reservation: ReservationDto = {
      clientId: '',
      restaurantId: '',
      startTime: chosenDate.toDate(),
      endTime: null,
      status: ReservationStatus.Pending,
      people: this.reservationForm.value.people,
      tables: []
    };

    console.log(reservation);
  }

}
