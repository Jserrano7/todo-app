import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable } from 'rxjs';
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

  register(todo: any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.url+'todos', todo, {headers: headers});
  }

  update(id: any, todo: any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.put(`${this.url}todos/${id}`, todo, {headers: headers});
  }

  getTodo(): Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get(this.url + 'todos', {headers: headers});
  }

  getTodoId(id: any): Observable<any>{
    return this._http.get(`${this.url}todos/${id}`);
  }

  delete(id: any): Observable<any>{
    return this._http.delete(`${this.url}todos/${id}`);
  }

  test() {
    return 'prueba';
  }
}