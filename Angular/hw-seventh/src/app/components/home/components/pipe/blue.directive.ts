import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appBlue]'
})
export class BlueDirective {

  constructor(private element: ElementRef) {
    element.nativeElement.style.background = 'blue';
  }

}
