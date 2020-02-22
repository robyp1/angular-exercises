import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.scss']
})
export class SwitcherComponent implements OnInit {

  @Input()
  value: boolean

  @Output()
  valueChange = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit() {
  }

}
