import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as moment from 'moment';

import { ReservationService, ClientManagerService } from '../../app/shared/@services';
import { Reservation, Client } from '../../app/shared/@model';


@IonicPage()
@Component({
  selector: 'page-reservation-confirmation',
  templateUrl: 'reservation-confirmation.html',
})
export class ReservationConfirmationPage implements OnInit {

  statusMessage: string;

  constructor(private navParams: NavParams,
              private navCtrl: NavController,
              private reservationService: ReservationService){
    this.onSendReservation(navParams.get('reservation'));
  }

  ngOnInit(){}

  ionViewWillEnter(){
    this.statusMessage = 'Se trimite rezervarea...';
  }

  onGoToRoot(){
    this.navCtrl.popToRoot();
  }

  onSendReservation(reservation: Reservation){
    this.reservationService.post(reservation).subscribe((res) => {
      console.log(res);
      this.statusMessage = 'Rezervare trimisă cu succes!';
    });
  }

}
