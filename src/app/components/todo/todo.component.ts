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

  async getTodo() {
    const res = await this._todoService.getTodo();
    this.todos = res;
  }

  async deleteTodo(id: any) {
    const res =  await this._todoService.delete(id);
    if(res){
      this.getTodo();
    }
  }

  ngOnInit(): void {
    this.getTodo();
  }
}
