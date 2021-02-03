import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBlack]'
})
export class BlackDirective {

  constructor(private element: ElementRef, renderer2: Renderer2) {
  }

  @HostListener('mouseover')
  mouse(): void {
    this.element.nativeElement.style.backgroundColor = 'black';
    this.element.nativeElement.style.color = '#fff';
  }
}
