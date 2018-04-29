import { Component, Input, HostListener } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'rs-back-button',
  templateUrl: './back-button.component.html'
})
export class BackButtonComponent {

  @Input() label: string = 'Înapoi';

  constructor(private navCtrl: NavController) {}

  @HostListener('click', ['$event'])
  onClick() {
    this.navCtrl.pop({animate: true, direction: 'back'});
  }

}
