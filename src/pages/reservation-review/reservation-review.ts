import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as moment from 'moment';

import { ReservationConfirmationPage } from '../reservation-confirmation/reservation-confirmation';
import { ReservationService, ClientManagerService } from '../../app/shared/@services';
import { Reservation, Client } from '../../app/shared/@model';


@IonicPage()
@Component({
  selector: 'page-reservation-review',
  templateUrl: 'reservation-review.html',
})
export class ReservationReviewPage implements OnInit {

  reservation: Reservation;
  client: Client;

  constructor(private navParams: NavParams,
              private navCtrl: NavController,
              private reservationService: ReservationService,
              private clientManagerService: ClientManagerService){
    this.reservation = navParams.get('reservation');
    this.client = this.clientManagerService.getClient();
  }

  ngOnInit(){}

  onSendReservation(){
    this.navCtrl.push(ReservationConfirmationPage, {
      "reservation": this.reservation
    });
  }

}
