import { TestBed } from '@angular/core/testing';
import { TodolistService } from './todolist.service';
import { HttpService } from '../services/http.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpErrorService } from '../services/http-error.service';
import { Todo, Todolist } from './todolist';
import { HttpErrorResponse } from '@angular/common/http';
import { asyncData, asyncError } from '../testing/async-observable-heleprs';


// ----------------------- SPIES ---------------------------

describe('todolist service (with spies)', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let todolistService: TodolistService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    todolistService = new TodolistService(<any> httpClientSpy);
  });

  it('should return expected todolist (called once)', () => {
    const expectedTodolist = {
      todos: [
        { id: 1, created_at: null as Date, message: 'test', done_at: null as Date }
      ] as Todo[]
    } as Todolist;

    httpClientSpy.get.and.returnValue(asyncData(expectedTodolist));

    todolistService.getTodos().subscribe(
      todos => expect(todos).toEqual(expectedTodolist, 'expected todolist'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should return an error when the server returns 404', () => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404, statusText: 'Not found'
    });

    httpClientSpy.get.and.returnValue(asyncError(errorResponse));

    todolistService.getTodos().subscribe(
      todos => fail('expected error'),
      error => expect(error.message).toContain('404 Not found')
    );
  });
});


// ----------------------- MOCKS ---------------------------

describe('todolist service (with mocks)', () => {
  let todolistService: TodolistService;
  let httpTestingController: HttpTestingController;
  let httpService: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        TodolistService,
        HttpService,
        HttpErrorService
      ]
    });
    todolistService = TestBed.get(TodolistService);
    httpTestingController = TestBed.get(HttpTestingController);
    httpService = TestBed.get(HttpService);
  });

  it('should create an instance', () => {
    expect(todolistService).toBeDefined();
  });

  describe('#getTodos', () => {
    let todolistExpected: Todolist;

    beforeEach(() => {
      todolistService = TestBed.get(TodolistService);
      todolistExpected = {
        todos: [
          { id: 1, created_at: null as Date, message: 'test', done_at: null as Date }
        ] as Todo[]
      } as Todolist;

    });

    it('should return expected todos(called once)', () => {
      todolistService.getTodos().subscribe(
        todos => expect(todos).toEqual(todolistExpected, 'should return expected todos'),
        fail
      );

      const req = httpTestingController.expectOne('http://autumn-field-3316.getsandbox.com/todos');
      expect(req.request.method).toEqual('GET');

      req.flush(todolistExpected);
    });
  });
});
