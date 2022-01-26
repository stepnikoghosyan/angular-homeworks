import { Component, OnInit } from "@angular/core";

// models
import { User } from "../../models/user.model";
import { MyList } from "../../models/list.model";
import { Todo } from "../../models/todo.model";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {
  public usersList: MyList<User> = new MyList<User>();

  public expandedItems: { [userID: number]: boolean } = {};

  ngOnInit() {
    this.getData();
  }

  private getData(): void {
    for (let i = 1; i <= 10; i++) {
      this.usersList.add(new User(i, `User ${ i }`, i % 2 === 0 && this.getTodoData() || new MyList()));
    }
  }

  private getTodoData(): MyList<Todo> {
    const list = new MyList<Todo>();

    for (let i = 1; i <= 5; i++) {
      list.add(new Todo(i, `Todo item ${ i }`));
    }

    return list;
  }

  public toggleRow(userId: number): void {
    if (userId in this.expandedItems) {
      this.expandedItems[userId] = !this.expandedItems[userId];
    } else {
      this.expandedItems[userId] = true;
    }
  }
}
