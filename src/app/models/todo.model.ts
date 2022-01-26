import { IWithIdentity } from "./with-identity.model";

export class Todo implements IWithIdentity {
  constructor(public id: number, public title: string) {
  }
}
