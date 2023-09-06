import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appProductCard]',
})
export class ProductCardDirective {

  // @Input() radius1: string = '10px';

  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.borderRadius = '20px';
    this.elementRef.nativeElement.style.boxShadow ='0px 2px 5px rgba(0, 0, 0, 0.3)';
  }
  @HostListener('mouseover') fun1() {
     this.elementRef.nativeElement.style.borderRadius = '40px';
     this.elementRef.nativeElement.style.boxShadow ='0px 5px 8px rgba(0, 0, 0, 0.5)';
  }
  @HostListener('mouseout') fun2() {
     this.elementRef.nativeElement.style.borderRadius = '20px';
     this.elementRef.nativeElement.style.boxShadow ='0px 2px 5px rgba(0, 0, 0, 0.3)';
  }
}
