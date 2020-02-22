import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'uppercaser',
  templateUrl: './uppercaser.component.html',
  styleUrls: ['./uppercaser.component.scss']
})
export class UppercaserComponent implements OnInit {

  @Input()
  testo: string

  @Output()
  testoChange = new EventEmitter<string>()

  constructor() { }

  ngOnInit() {
  }

  transformInUpperCase(){
    let testoTrasformato =  this.testo.toUpperCase()
    this.testoChange.emit(testoTrasformato)
  }



}
