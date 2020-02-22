import { Component, OnInit, EventEmitter,Input,Output } from '@angular/core';

@Component({
  selector: 'lowercaser',
  templateUrl: './lowercaser.component.html',
  styleUrls: ['./lowercaser.component.scss']
})
export class LowercaserComponent implements OnInit {


  @Input()
  testo: string

  @Output()
  testoChange = new EventEmitter<string>()

  constructor() { }

  ngOnInit() {
  }


  transformInLowerCase(){
    let testoTrasformato =  this.testo.toLocaleLowerCase()
    this.testoChange.emit(testoTrasformato)
  }

}
