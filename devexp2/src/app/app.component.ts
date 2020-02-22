import { Component } from '@angular/core';
import {Utente} from './utente/utente.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'devexp2';

  utenti: Utente[] =  [
    {nome:"Robertino", cognome:"due", eta: 6, color: "#6ac2ff"},
    {nome:"Roberto", cognome:"ilmio", eta: 37, color: "#ff7474"},
    {nome:"Pippo", cognome:"Pluto", eta: 17, color: "#6ecff73" }
  ]

  constructor(){
    //filtro mninorenni, comentato perchè gestito sul template app per motivi di rendering
    // this.utenti = this.utenti.filter(u => u.eta>=18)
  }
}


