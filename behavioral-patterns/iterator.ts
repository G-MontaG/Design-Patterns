module IteratorModule {
  export abstract class Aggregate {
    public abstract createIterator();
  }

  export class ConcreteAggregate extends Aggregate {
    private items: Array<any> = [];

    public createIterator() {
      return new ConcreteIterator(this);
    }

    public get count() {
      return this.items.length;
    }

    public getItem(index: number) {
      return this.items[index];
    }

    public setItem(index: number, value: any) {
      this.items[index] = value;
    }
  }

  export abstract class Iterator {
    public abstract first();
    public abstract next();
    public abstract isDone();
    public abstract currentItem();
  }

  export class ConcreteIterator extends Iterator {
    private aggregate: ConcreteAggregate;
    private current: number = 1;

    constructor(aggregate: ConcreteAggregate) {
      super();
      this.aggregate = aggregate;
    }

    public first() {
      return this.aggregate.getItem(1);
    }

    public next() {
      let ret = null;
      if (this.current < this.aggregate.count - 1) {
        ret = this.aggregate.getItem(++this.current);
      }
      return ret;
    }

    public currentItem() {
      return this.aggregate.getItem(this.current);
    }

    public isDone() {
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