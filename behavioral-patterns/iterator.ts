module IteratorModule {
  export abstract class Aggregate {
    public abstract createIterator();
  }

  export class ConcreteAggregate extends Aggregate {
    private items: Array<any> = [];

    public createIterator(): Iterator {
      return new ConcreteIterator(this);
    }

    public get count(): number {
      return this.items.length;
    }

    public getItem(index: number): any {
      return this.items[index];
    }

    public setItem(index: number, value: any) {
      this.items[index] = value;
    }
  }

  export abstract class Iterator {
    public abstract first(): any;
    public abstract next(): any;
    public abstract isDone(): boolean;
    public abstract currentItem(): any;
  }

  export class ConcreteIterator extends Iterator {
    private aggregate: ConcreteAggregate;
    private current: number = 1;

    constructor(aggregate: ConcreteAggregate) {
      super();
      this.aggregate = aggregate;
    }

    public first(): any {
      return this.aggregate.getItem(1);
    }

    public next(): any {
      let ret = null;
      if (this.current < this.aggregate.count - 1) {
        ret = this.aggregate.getItem(++this.current);
      }
      return ret;
    }

    public currentItem(): any {
      return this.aggregate.getItem(this.current);
    }

    public isDone(): boolean {
      return this.current >= this.aggregate.count;
    }
  }
}

//*********************************************
(function run() {
  let a: IteratorModule.ConcreteAggregate = new IteratorModule.ConcreteAggregate();
  a.setItem(1, "Item A");
  a.setItem(2, "Item B");
  a.setItem(3, "Item C");
  a.setItem(4, "Item D");

  let i: IteratorModule.Iterator = a.createIterator();

  console.log("Iterating over collection:");

  let item = i.first();
  while (item != null) {
    console.log(item);
    item = i.next();
  }
}());