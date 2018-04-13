import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from 'ionic-angular';

import { LogoComponent } from './logo/logo.component';
import { IconComponent } from './icon/icon.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { PresenterComponent } from './presenter/presenter.component';

const moduleComponents = [
  HeaderComponent,
  MenuComponent,
  LogoComponent,
  IconComponent,
  PresenterComponent
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [moduleComponents],
  exports: [moduleComponents]
})
export class CoreModule { }
