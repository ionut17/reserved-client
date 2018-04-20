import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as moment from 'moment';

import { BaseFormComponent } from '../shared/base-form.component';

export const DATETIME_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DatetimeComponent),
    multi: true
};

@Component({
  selector: 'rs-datetime',
  templateUrl: './datetime.component.html',
  providers: [DATETIME_VALUE_ACCESSOR]
})
export class DatetimeComponent extends BaseFormComponent<any> implements OnInit {

  @Input() displayFormat: string;

  @Input() pickerFormat: string;

  @Input() minuteValues: Array<any> | string;

  @Input() minDate: moment.Moment;

  @Input() maxDate: moment.Moment;

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
