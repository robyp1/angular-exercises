import { Component } from '@angular/core';
import { Utente } from './utente/utente.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'devexp3';

  utenti: Utente[] =  [
    {nome:"Robertino", cognome:"due", eta: 6, color: "#6ac2ff"},
    {nome:"Roberto", cognome:"ilmio", eta: 37, color: "#ff7474"},
    {nome:"Pippo", cognome:"Pluto", eta: 17, color: "#6ecff73" }
  ]

  dati = {
    booleano : true
  }

  utente = {
    nome : "Ro"
  }

  utenteClonato:{nome: string}

  constructor() {
    
  }

  ngOnInit(){
    this.utenteClonato = {...this.utente}
  }

  mostraCognomeUtenti = true //se a false nasconde i cognomi per la condizione ngIf nel template utente 
}
