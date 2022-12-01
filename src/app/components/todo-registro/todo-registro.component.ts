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
  onSubmit(): void {
    console.log(this.registro.value);
    this._todoService.register(this.registro.value).subscribe({
      next: (response) => {
        if(response.data){
          this.status = "SUCCESS";
          this.registro.reset();
        }else {
          this.status = "ERROR";
        }
      },
      error: (e) => console.error(e)
    });
  }

  onEdit(id: any): void {
    this._todoService.update(id, this.registro.value).subscribe({
      next: (response) => {
        console.log(response.data);
        if(response.data){
          this.registro.reset();
          this._router.navigate(['/']);
        }else {
          this.status = "ERROR";
        }
      },
      error: (e) => console.error(e)
    });
  }

  getTodoId(id: any){
    this._todoService.getTodoId(id).subscribe({
      next: (res) => {
        this.todos = res.data;
        this.registro.controls['task'].setValue(this.todos.task);
      }
    })
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
