import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'componenente-con-input',
  templateUrl: './componenente-con-input.component.html',
  styleUrls: ['./componenente-con-input.component.scss']
})
export class ComponenenteConInputComponent implements OnInit {

  constructor() { }
  @Input()
  dato:string

  ngOnInit() {
  }

}
