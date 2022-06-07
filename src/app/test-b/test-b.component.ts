import { Component, Input } from '@angular/core';
import { InterfaceB } from '../interfaces';

@Component({
  selector: 'app-test-b[interface]',
  templateUrl: './test-b.component.html',
  styleUrls: ['./test-b.component.css']
})
export class TestBComponent {
  @Input() interface!: InterfaceB;
}
