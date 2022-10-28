import { Injectable } from '@angular/core';
import { Cursos } from '../models/cursos';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

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
  cursosObservable: Observable<Cursos[]>;
  cursosSubject:BehaviorSubject<Cursos[]>;

  constructor() { 
    this.cursosObservable = new Observable<Cursos[]>((subscriptor)=>{
      subscriptor.next(this.listaLinks);
      
    });
    this.cursosSubject= new BehaviorSubject<Cursos[]>(this.listaLinks);
  }

  obtenerCursos():Promise<Cursos[] | any>{
  return new Promise((resolve,reject)=>{
    if(this.listaLinks.length >0){
      resolve(this.listaLinks)
    }else{
      reject({
        codigo: 0,
        mensaje:'no hay cursos'
      });
    }
  });
  }
  obtenerCursosObservable(){
   
   return this.cursosSubject.asObservable();
  }

 

  agregarCurso(curso : Cursos){
   this.listaLinks.push(curso);
   this.cursosSubject.next(this.listaLinks);
  }
}
