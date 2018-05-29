import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/index';
import { HttpService } from '../services/http.service';
import { Todo, Todolist } from './todolist';

@Injectable()
export class TodolistService {
  private todosEndpoint = 'todos';
  private doneTodoEndpoint = '/done';

  constructor(private httpService: HttpService) {}

  getTodos(): Observable<Todolist> {
    return this.httpService.get<Todolist>(this.todosEndpoint);
  }

  doneTodo(element: Todo): Observable<Todo> {
    const doneEndpoint = this.todosEndpoint + '/' + element.id + this.doneTodoEndpoint;
    return this.httpService.post<Todo>(doneEndpoint, element);
  }

  addTodo(element: string): Observable<Todolist>  {
    return this.httpService.post<Todolist>(this.todosEndpoint, { body: element });
  }

  test() {
    const doneEndpoint = this.todosEndpoint + '/' + 3000 + this.doneTodoEndpoint;
    return this.httpService.post<Todo>(doneEndpoint, 'asd');
  }
}
