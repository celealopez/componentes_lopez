import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

export interface Clase{
  nombre:string;
  profesor:string;
}


@Component({
  selector: 'app-formularios-template',
  templateUrl: './formularios-template.component.html',
  styleUrls: ['./formularios-template.component.css']
})


export class FormulariosTemplateComponent implements OnInit {
clase:Clase ={
  nombre:'',
  profesor:''
}
  // @ViewChild('formularioClase') formularioClaseRef: ElementRef;
  
  constructor() {
    
   }

  ngOnInit(): void {
  }

  // agregarClase(){
  //   console.log(this.formularioClaseRef.nativeElement)
  // }

}
