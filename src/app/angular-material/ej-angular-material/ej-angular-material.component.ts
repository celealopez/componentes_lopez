import { Component, OnInit } from '@angular/core';
import { Cursos } from '../../models/cursos';

@Component({
  selector: 'app-ej-angular-material',
  templateUrl: './ej-angular-material.component.html',
  styleUrls: ['./ej-angular-material.component.css']
})
export class EjAngularMaterialComponent implements OnInit {
  listaLinks:Array<Cursos>;
  variable:number;
   constructor() {
     this.variable=0;
     this.listaLinks = [
    {id:1,tipo:'programación',activo:true,nivel:'básico',link:'https://www.udemy.com/course/logica-programacion-aprende-programar-en-cualquier-lenguaje/'},
    {id:1,tipo:'programación',activo:true,nivel:'básico',link:'https://www.udemy.com/course/fundamentos-de-programacion-web-para-principiantes/'},
    {id:1,tipo:'programación',activo:true,nivel:'básico',link:'https://www.udemy.com/course/aprende-logica-de-programacion/'},
    {id:1,tipo:'programación',activo:true,nivel:'básico',link:'https://www.udemy.com/course/programacion-todosloslenguajes/'},
    {id:1,tipo:'programación',activo:true,nivel:'básico',link:'https://www.udemy.com/course/algoritmos-estructuras-de-datos/'}
       
     ];
    }
  ngOnInit(): void {
  }

  manejarEvento(){
    alert("hice click")
  }

}
