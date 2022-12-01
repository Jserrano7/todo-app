import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { TodoService } from '../../services/todo.service';
import { ActivatedRoute, Router } from "@angular/router"
@Component({
  selector: 'app-todo-registro',
  templateUrl: './todo-registro.component.html',
  providers: [TodoService]
})
export class TodoRegistroComponent implements OnInit {
  public titlePage: string;
  public todo: Todo;
  id: any;
  todos: any = [];
  edit: boolean = false;
  public status: string;
  registro: FormGroup;
  constructor(
    private _router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private _todoService: TodoService,
  ) {
    this.titlePage = "Registro de Tarea";
    this.todo = new Todo('','');
    this.status = '';
    this.registro =  this.formBuilder.group({
      task: ["", Validators.required]
    })

  }
  async onSubmit(){
    await this._todoService.register(this.registro.value);
    this.status = "SUCCESS";
    this.registro.reset();
  }

  async onEdit(id: any){
    await this._todoService.update(id, this.registro.value);
    this.registro.reset();
    this._router.navigate(['/']);
  }

  async getTodoId(id: any){
    const res = await this._todoService.getTodoId(id);
    this.todos = res;
    this.registro.controls['task'].setValue(this.todos.data.task);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if(params.has('id')){
        const id = params.get("id");
        this.id = id;
        this.titlePage = "Editar Tarea"
        this.edit = true;
        this.getTodoId(id);
      }
    });
  }
}
