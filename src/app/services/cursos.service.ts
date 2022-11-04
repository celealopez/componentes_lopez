import { Injectable } from '@angular/core';
import { Cursos } from '../models/cursos';
import {  Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  listaLinks!: Cursos[];
  uri : string = 'https://63645a9d7b209ece0f451a47.mockapi.io/cursos'
  constructor(public http : HttpClient) { 
    this.listaLinks = [];
  }
  
  getCursos(): Observable<Cursos[]>{
    return this.http.get<Cursos[]>(this.uri)
  }

  ageregarCurso(nuevoCurso: Cursos): Observable<any> {
    const curso = {
      tipo: nuevoCurso.tipo,
      activo: nuevoCurso.activo,
      nvel: nuevoCurso.nivel,
      link: nuevoCurso.link,
    };
    console.log(curso);
    return this.http.post(this.uri, curso, {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  obtenerCurso(id: string): Observable<Cursos>{
    return this.http.get<Cursos>(`${this.uri}/${id}`);
  }
  modificarCurso(curso: Cursos):Observable<Cursos>{
    return this.http.put<Cursos>(`${this.uri}/${curso.id}`,curso);


  }

  eliminarCurso(id: string){
    return this.http.delete(`${this.uri}/${id}`)
  }

  cantidad() {
    return this.listaLinks.length;
  }


}