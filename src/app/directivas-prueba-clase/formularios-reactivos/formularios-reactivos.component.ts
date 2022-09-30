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
      contrasenia: new FormControl('', [Validators.required,Validators.minLength(5)]),
      contrasenia2: new FormControl('', [Validators.required,Validators.minLength(5)]),
      admin: new FormControl(false, []),
    });
  }

  ngOnInit(): void {}

  agregarUsuario(){
    const contrasenia = this.formularioUsuario.value.contrasenia;
    const contrasenia2 = this.formularioUsuario.value.contrasenia2;
  this.contraseniasIguales = contrasenia === contrasenia2;
  }
}
