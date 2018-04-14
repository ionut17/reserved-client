import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { BaseFormComponent } from '../shared/base-form.component';

export const INPUT_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputComponent),
    multi: true
};

@Component({
  selector: 'rs-input',
  templateUrl: './input.component.html',
  providers: [INPUT_VALUE_ACCESSOR]
})
export class InputComponent extends BaseFormComponent<string> implements OnInit {

  @Input() type: string = 'text';

  @Input() min: any;

  @Input() max: any;

  @Input() step: any;

  @Input() clearInput: boolean;

  @Input() clearOnEdit: boolean;

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
