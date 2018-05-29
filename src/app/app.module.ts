import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpService } from './services/http.service';
import { HttpClientModule } from '@angular/common/http';
import { TodolistComponent } from './todolist/todolist.component';
import { TodolistService } from './todolist/todolist.service';
import { FormsModule } from '@angular/forms';
import { HttpErrorService } from './services/http-error.service';
import { TodolistAddElementComponent } from './todolist/todolist-add-element/todolist-add-element.component';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    TodolistAddElementComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    HttpService,
    HttpErrorService,
    TodolistService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
