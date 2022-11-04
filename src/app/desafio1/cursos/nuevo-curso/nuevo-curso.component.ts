import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CursosService } from '../../../services/cursos.service';
import { Router } from '@angular/router';
import { Cursos } from '../../../models/cursos';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nuevo-curso',
  templateUrl: './nuevo-curso.component.html',
  styleUrls: ['./nuevo-curso.component.css']
})
export class NuevoCursoComponent implements OnInit {
  formulario!: FormGroup;
  curso!: Cursos;
  private subs!: Subscription;
 

  @Output() onAgregar = new EventEmitter<Cursos>();

  constructor( private cursoService: CursosService,
    private router: Router) { 
      this.formulario = new FormGroup({
        tipo: new FormControl(),
        activo: new FormControl(),
        nivel: new FormControl(),
        link: new FormControl(),
       
      });
    }
    agregarCurso(curso: Cursos) {

      this.subs.add(this.cursoService.ageregarCurso(curso).subscribe({
        next: (result) => {
          console.log(result)
          alert("carga exitosa");
          this.router.navigate(["/cursosProg"])
        },
        error: (err) => {
          alert("error al cargar el curso");
          console.log(err)
        },
      }));
  
      
  
  
    }
  

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }


}
