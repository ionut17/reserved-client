import { Component, Input, HostListener } from '@angular/core';
import { NavController, NavOptions } from 'ionic-angular';
import { baseAnimation } from '../../@model';

@Component({
  selector: 'rs-back-button',
  templateUrl: './back-button.component.html'
})
export class BackButtonComponent {

  @Input() label: string = 'Înapoi';

  constructor(private navCtrl: NavController) {}

  @HostListener('click', ['$event'])
  onClick() {
    const opts: NavOptions = Object.assign({}, baseAnimation);
    opts.direction = 'back';
    this.navCtrl.pop(opts);
  }

}
