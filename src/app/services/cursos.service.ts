import { Injectable } from '@angular/core';
import { Cursos } from '../models/cursos';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private listaLinks : Cursos[]= [
    {id:1,tipo:'programación',activo:true,nivel:'básico',link:'https://www.udemy.com/course/logica-programacion-aprende-programar-en-cualquier-lenguaje/'},
    {id:2,tipo:'programación',activo:true,nivel:'básico',link:'https://www.udemy.com/course/fundamentos-de-programacion-web-para-principiantes/'},
    {id:3,tipo:'programación',activo:true,nivel:'básico',link:'https://www.udemy.com/course/aprende-logica-de-programacion/'},
    {id:4,tipo:'programación',activo:true,nivel:'básico',link:'https://www.udemy.com/course/programacion-todosloslenguajes/'},
    {id:5,tipo:'programación',activo:false,nivel:'intermedio',link:'https://www.udemy.com/course/algoritmos-estructuras-de-datos/'},
    {id:6,tipo:'programación',activo:true,nivel:'intermedio',link:'https://www.udemy.com/course/algoritmos-estructuras-de-datos/'},
    {id:7,tipo:'programación',activo:true,nivel:'intermedio',link:'https://www.udemy.com/course/algoritmos-estructuras-de-datos/'},
    {id:8,tipo:'programación',activo:false,nivel:'avanzado',link:'https://www.udemy.com/course/algoritmos-estructuras-de-datos/'},
    {id:9,tipo:'programación',activo:true,nivel:'avanzado',link:'https://www.udemy.com/course/algoritmos-estructuras-de-datos/'}
];
    

  constructor() { }

  obtenerCursos():Cursos[] {
  return this.listaLinks;
  }

  agregarCurso(curso : Cursos){
  this.listaLinks.push(curso);
  }
}
