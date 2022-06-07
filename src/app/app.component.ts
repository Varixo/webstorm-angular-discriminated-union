import { Component } from '@angular/core';
import { Interface, InterfaceA, InterfaceB } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  interface: Interface = {
    type: 'A'
  };

  maybeAsTypeA = (item: Interface): InterfaceA | undefined =>
    item.type === 'A' ? item : undefined

  maybeAsTypeB = (item: Interface): InterfaceB | undefined =>
    item.type === 'B' ? item : undefined
}
