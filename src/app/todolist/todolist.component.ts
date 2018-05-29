import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  private todoElements;

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.httpService.get('todos').subscribe(e => this.todoElements = e.todos);
  }

}
