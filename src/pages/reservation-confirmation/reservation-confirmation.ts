import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as moment from 'moment';

import { ReservationService, ClientManagerService } from '../../app/shared/@services';
import { Reservation, Client, baseAnimation } from '../../app/shared/@model';


@IonicPage()
@Component({
  selector: 'page-reservation-confirmation',
  templateUrl: 'reservation-confirmation.html',
})
export class ReservationConfirmationPage implements OnInit {

  sent: boolean = false;;

  constructor(private navParams: NavParams,
              private navCtrl: NavController,
              private reservationService: ReservationService){
    this.onSendReservation(navParams.get('reservation'));
  }

  ngOnInit(){}

  ionViewWillEnter(){
    this.sent = false;
  }

  onGoToRoot(){
    this.navCtrl.popToRoot(baseAnimation);
  }

  onSendReservation(reservation: Reservation){
    this.reservationService.post(reservation).subscribe((res) => {
      console.log(res);
      this.sent = true;
    });
  }

}
