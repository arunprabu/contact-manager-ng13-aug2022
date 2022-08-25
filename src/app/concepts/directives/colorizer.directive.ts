import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColorizer]' // attribute selector
})
export class ColorizerDirective {

  // Working with styles using HostBinding 
  @HostBinding('style.border') border: string = ''; 

  constructor( private elRef: ElementRef, private renderer: Renderer2) {
    console.log('Inside constructor');
    console.log(this.elRef.nativeElement);

    let divEl = this.elRef.nativeElement;
    // divEl.style.backgroundColor= 'yellow'; // NOT Recommended to do it thru JS 

    this.renderer.setStyle(divEl, 'background-color', 'yellow');
    this.renderer.setStyle(divEl, 'color', 'black');
    this.renderer.setStyle(divEl, 'height', '200px');

    // this.renderer.addClass(divEl,'redText');   

    // Let's create element dynamically
    const newDiv = this.renderer.createElement('div'); // <div></div>
    const text = this.renderer.createText('Powered by Colorizer Directive'); // Powered by Colorizer Directive
    this.renderer.appendChild(newDiv, text); // <div>Powered by Colorizer Directive</div>
    this.renderer.appendChild(divEl, newDiv);
  }

  @HostListener('click', ['$event'])
  handleClick(event: any){
    console.log(event);
    console.log('Clicked');
    console.dir(event.target);
  
    this.renderer.setStyle(event.target, 'background-color', 'red');    
  }

  @HostListener('mouseover', ['$event.target'])
  handleMouseover(element: any){
    // element.style.backgroundColor = 'green';
    this.renderer.setStyle(element, 'background-color', 'green');   

    this.border = 'dashed 5px #000'; // resetting style using the public variable with HostBinding
  }

  @HostListener('mouseleave', ['$event.target'])
  handleMouseleave(element: any){
    // element.style.backgroundColor = 'yellow';
    this.renderer.setStyle(element, 'background-color', 'yellow');   
  }

}
