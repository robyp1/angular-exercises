import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'componente-con-output',
  templateUrl: './componente-con-output.component.html',
  styleUrls: ['./componente-con-output.component.scss']
})
export class ComponenteConOutputComponent implements OnInit {

  @Input()
  someInput:string

  @Output()
  evento = new EventEmitter()

  constructor() { }

  ngOnInit() {
    let data:object ={ciao:"hello, welcome"}
    this.evento.emit(data)
  }

}
