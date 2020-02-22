import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MioComponenteComponent } from './mio-componente/mio-componente.component';
import { ComponenenteConInputComponent } from './componenente-con-input/componenente-con-input.component';
import { TestComponent } from './test/test.component';
import { ComponenteConOutputComponent } from './componente-con-output/componente-con-output.component';
import { SecondoComponenteComponent } from './secondo-componente/secondo-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    MioComponenteComponent,
    ComponenenteConInputComponent,
    TestComponent,
    ComponenteConOutputComponent,
    SecondoComponenteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
