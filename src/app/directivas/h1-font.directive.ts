import { Directive, Input, ElementRef, Renderer2,OnInit } from '@angular/core';

@Directive({
  selector: '[appH1Font]'
})
export class H1FontDirective {
@Input('appH1Font') font!:boolean;
  constructor( 
    private elemento : ElementRef,
    private  rendered : Renderer2) { 

 }

 ngOnInit():void{
  this.rendered.setStyle(this.elemento.nativeElement,'color',this.font ? 'green':'red')
 }
}
