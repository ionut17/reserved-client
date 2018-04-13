import { Component, OnInit } from '@angular/core';
import { MenuController } from 'ionic-angular';

@Component({
  selector: 'rs-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(private menuCtrl: MenuController) { }

  ngOnInit() {
  }

  onMenuClick():void{
    this.menuCtrl.toggle();
  }

}
