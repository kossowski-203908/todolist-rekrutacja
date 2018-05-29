export class Todolist {
  todos: Array<Todo>;
}

export class Todo {
  id: number;
  created_at: Date;
  message: string;
  done_at: Date;
}
