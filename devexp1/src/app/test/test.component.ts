import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  

  @Input()
  someInput:string

  @Output()
  someEvent = new EventEmitter()
  
  constructor() { }


  ngOnInit() {
  
  }

}


