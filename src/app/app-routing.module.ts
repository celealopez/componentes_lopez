import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosProgComponent } from './desafio1/cursos/cursos-prog/cursos-prog.component';
import { StudentComponent } from './desafio1/student/student.component';

const routes: Routes = [
  { path: 'cursosProg', component: CursosProgComponent },
  { path: 'inicio', component: StudentComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: '**', component: StudentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
