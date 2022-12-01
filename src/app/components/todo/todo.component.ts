import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';
import { TodoService } from '../../services/todo.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  providers: [TodoService]
})
export class TodoComponent implements OnInit {
  public titlePage: string;
  todos: any = [];
  constructor(
    private _todoService: TodoService,
  ) {
    this.titlePage = 'Listado de Tareas';
  }

  getTodo() {
    this._todoService.getTodo().subscribe({
      next: (response) => {
        this.todos = response.data;
      },
      error: (e) => console.error(e)
    });
  }

  deleteTodo(id: any) { 
    this._todoService.delete(id).subscribe({
      next: (res) => {
        console.log('Borrado con exito');
        this.getTodo();
      }
    });
  }

  ngOnInit(): void {
    this.getTodo();
  }
}
