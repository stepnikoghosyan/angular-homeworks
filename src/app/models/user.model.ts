import { IWithIdentity } from "./with-identity.model";
import { MyList } from "./list.model";
import { Todo } from "./todo.model";

export class User implements IWithIdentity {
  constructor(
    public id: number,
    public name: string,
    public todoList: MyList<Todo>
  ) {
  }
}
