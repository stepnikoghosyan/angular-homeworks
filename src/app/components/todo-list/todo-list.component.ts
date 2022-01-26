import { Component, Input, OnInit } from '@angular/core';

// models
import { MyList } from "../../models/list.model";
import { Todo } from "../../models/todo.model";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
})
export class TodoListComponent implements OnInit {
  @Input() public todoList: MyList<Todo> | null = null;

  ngOnInit(): void {
    if (!this.todoList) {
      this.getData();
    }
  }

  private getData(): void {
    this.todoList = new MyList<Todo>();

    for (let i = 1; i <= 10; i++) {
      this.todoList.add(new Todo(i, `Todo ${ i }`));
    }
  }
}
