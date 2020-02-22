import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[mmjOtrsBold]'
})
export class OtrsBoldDirective {

  constructor(el: ElementRef, renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, 'font-weight', 'bold');
   }

}
