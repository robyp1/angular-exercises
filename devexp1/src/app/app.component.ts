import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data = {hello: "ciao"}
  data2 = {presentation: "ciao, sono Roberto"}
  dataPerSecondoComponente ={nome :"Roberto"}
  title = 'devexp1';

  metodoDellaClasseAppComponente(e){
    console.log(e)
    alert('Event object is: ' + e)
  }

  loggaEvento(e){
    console.log(e)
    if (e.ciao) { alert(e.ciao)}
    else alert(e)
  }
}


