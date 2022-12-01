import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// importar componentes

import { TodoComponent } from './components/todo/todo.component';
import { TodoRegistroComponent } from './components/todo-registro/todo-registro.component';


const routes: Routes = [
  {
    path: '',
    component: TodoComponent
  },
  {
    path: 'form',
    component: TodoRegistroComponent
  },
  {
    path: 'form/:id',
    component: TodoRegistroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
