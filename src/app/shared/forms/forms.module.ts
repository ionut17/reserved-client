import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from 'ionic-angular';

import { InputComponent } from './input/input.component';
import { TextareaComponent } from './textarea/textarea.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { LabelComponent } from './label/label.component';
import { CoreModule } from '../core';
import { FormGroupComponent } from './form-group/form-group.component';
import { DatetimeComponent } from './datetime/datetime.component';

const moduleComponents = [
  InputComponent,
  TextareaComponent,
  DropdownComponent,
  LabelComponent,
  DatetimeComponent,
  FormGroupComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CoreModule
  ],
  declarations: [...moduleComponents],
  exports: [...moduleComponents],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CustomFormsModule { }
