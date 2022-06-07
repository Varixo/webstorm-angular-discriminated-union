import { Component, Input } from '@angular/core';
import { InterfaceA } from '../interfaces';

@Component({
  selector: 'app-test-a[interface]',
  templateUrl: './test-a.component.html',
  styleUrls: ['./test-a.component.css']
})
export class TestAComponent {
  @Input() interface!: InterfaceA;
}
