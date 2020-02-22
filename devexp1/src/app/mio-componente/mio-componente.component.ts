import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mio-componente',
  templateUrl: './mio-componente.component.html',
  styleUrls: ['./mio-componente.component.scss']
})
export class MioComponenteComponent implements OnInit {

  @Input()
  dato: string

  constructor() { }

  ngOnInit() {
  }

}
