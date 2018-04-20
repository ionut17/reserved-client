import { Component, Input } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'rs-validations',
  templateUrl: './validations.component.html'
})
export class ValidationsComponent {

  @Input() controlRef: NgModel;
  @Input() controlRefName: string;

  constructor() {
  }

}
