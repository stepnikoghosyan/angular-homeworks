import { IWithIdentity } from "./with-identity.model";

export class MyList<T extends IWithIdentity> {
  // best option - use Map
  private values: T[];

  constructor(initialData?: T[]) {
    this.values = initialData || [];
  }

  public add(data: T): void {
    if (!this.values.find((item) => item.id === data.id)) {
      this.values.push(data);
    }
  }

  public findById(id: number): T | null {
    return this.values.find((item) => item.id === id) || null;
  }

  public deleteById(id: number): boolean {
    const lengthBeforeDelete = this.values.length;
    this.values = this.values.filter((item) => item.id === id);
    return lengthBeforeDelete === this.values.length;
  }

  public getValues(): T[] {
    return this.values;
  }
}
