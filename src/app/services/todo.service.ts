import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { firstValueFrom } from 'rxjs';
import { Todo } from '../models/todo'
import { global } from './global';

@Injectable()
export class TodoService {
  public url: string;
  constructor(
    public _http: HttpClient
  ) {
    this.url = global.url;
  }

  async register(todo: any){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return await firstValueFrom(this._http.post(this.url+'todos', todo, {headers: headers}));
  }

  update(id: any, todo: any) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return firstValueFrom(this._http.put(`${this.url}todos/${id}`, todo, {headers: headers}));
  }

  async getTodo(){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return await firstValueFrom(this._http.get(this.url + 'todos', {headers: headers}));
  }

  async getTodoId(id: any){
    return await firstValueFrom(this._http.get(`${this.url}todos/${id}`));
  }

  delete(id: any){
    return firstValueFrom(this._http.delete(`${this.url}todos/${id}`));
  }

  test() {
    return 'prueba';
  }
}