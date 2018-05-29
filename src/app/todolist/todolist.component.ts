import { Component, OnInit } from '@angular/core';
import { Todo } from './todolist';
import { TodolistService } from './todolist.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  private todoElements: Array<Todo>;

  constructor(private todolistService: TodolistService) {}

  ngOnInit() {
    this.todolistService.getTodos().subscribe(
      res => this.todoElements = res.todos,
      err => alert(err)
    );
  }

  doneTodo(todoElement: Todo): void {
    this.todolistService.doneTodo(todoElement).subscribe(
      res => this.todoElements[todoElement.id - 1] = res,
      err => alert(err)
    );
  }

  addTodo(message: string): void {
    this.todolistService.addTodo(message).subscribe(
      e => this.todoElements = e.todos,
      err => alert(err)
    );
  }
}
