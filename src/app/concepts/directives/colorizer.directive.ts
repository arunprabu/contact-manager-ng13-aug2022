import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColorizer]' // attribute selector
})
export class ColorizerDirective {

  constructor( private elRef: ElementRef, private renderer: Renderer2) {
    console.log('Inside constructor');
    console.log(this.elRef.nativeElement);

    let divEl = this.elRef.nativeElement;
    // divEl.style.backgroundColor= 'yellow'; // NOT Recommended to do it thru JS 

    this.renderer.setStyle(divEl, 'background-color', 'yellow');
    this.renderer.setStyle(divEl, 'color', 'black');
    this.renderer.setStyle(divEl, 'height', '200px');

    // this.renderer.addClass(divEl,'redText');
    
    // TO LEARN: Events using hostlistener -
    //  hostbinding

  }

}
