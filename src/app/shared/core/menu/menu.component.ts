import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'rs-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent  {

  @Input() content: TemplateRef<any>;

}
