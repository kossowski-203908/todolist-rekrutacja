import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-todolist-add-element',
  templateUrl: './todolist-add-element.component.html',
  styleUrls: ['./todolist-add-element.component.css']
})
export class TodolistAddElementComponent {
  @Output() addTodo = new EventEmitter<string>();
  private todoMessage: string;

  submitAddTodo() {
    this.addTodo.emit(this.todoMessage);
  }
}
