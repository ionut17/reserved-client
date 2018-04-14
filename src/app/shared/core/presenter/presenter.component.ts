import { Component, Input } from '@angular/core';

@Component({
  selector: 'rs-presenter',
  templateUrl: './presenter.component.html'
})
export class PresenterComponent {

  @Input() icon: string = '';

  @Input() label: string = '';

}
