import { OnInit, ElementRef } from '@angular/core';
import { Directive, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private elementRef: ElementRef, private rederer: Renderer2) { }
  
  ngOnInit(): void {
   this.rederer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue')   
  }
}
