import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'utente',
  templateUrl: './utente.component.html',
  styleUrls: ['./utente.component.scss']
})
export class UtenteComponent implements OnInit {

  @Input()
  user:Utente

  constructor() { }

  ngOnInit() {
  }

}

export interface Utente {
  nome:string,
  cognome:string,
  eta:number,
  color?: string
}
