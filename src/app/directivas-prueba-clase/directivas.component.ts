import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
// import { Persona } from '../models/persona';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {
  nombre! : string;
  constructor(private deteccionCambios : ChangeDetectorRef) {
    console.log('llamado desde el constructor');
    this.deteccionCambios.detectChanges
   }

  ngOnInit(): void {
  }
  variable1: number = 10;
  variable2: number = 5;

  // listaNombres: Array<Persona> = [
  //   {nombre:'abner',edad:30},
  //   {nombre:'cele',edad:30},
  //   {nombre:'cele',edad:3},
  //   {nombre:'abner',edad:30},
  //   {nombre:'abner',edad:30}
  // ];


  manejarEvento(){
    this.variable1 = 2555
  }
}
