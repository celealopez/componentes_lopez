import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formularios-reactivos',
  templateUrl: './formularios-reactivos.component.html',
  styleUrls: ['./formularios-reactivos.component.css'],
})
export class FormulariosReactivosComponent implements OnInit {
  formularioUsuario!: FormGroup;
  contraseniasIguales!:boolean;

  constructor(private fb: FormBuilder) {
  
    this.formularioUsuario = fb.group({
      nombre: new FormControl('', [Validators.required]),
      correo: new FormControl('', [Validators.email,Validators.required]),
      contrasenia: new FormControl('', [Validators.required,Validators.minLength(5),Validators.pattern('^.*[A-Z]+.*$')]),
      contrasenia2: new FormControl('', [Validators.required,Validators.minLength(5)]),
      admin: new FormControl(false, []),
    });
  }

  ngOnInit(): void {}

  contras(){
    const contrasenia1 = this.formularioUsuario.value.contrasenia;
    const contrasenia2 = this.formularioUsuario.value.contrasenia2;
  this.contraseniasIguales = contrasenia1 === contrasenia2;
  }
  agregarUsuario(){

  }
}
