module VisitorModule {
  export abstract class Visitor {
    public abstract visitConcreteElementA(concreteElementA: ConcreteElementA);

    public abstract visitConcreteElementB(concreteElementB: ConcreteElementB);
  }

  export class ConcreteVisitor1 extends Visitor {
    public visitConcreteElementA(concreteElementA: ConcreteElementA) {
      console.log(`${concreteElementA.constructor.name} visited by ${this.constructor.name}`);
    }

    public visitConcreteElementB(concreteElementB: ConcreteElementB) {
      console.log(`${concreteElementB.constructor.name} visited by ${this.constructor.name}`);
    }
  }

  export class ConcreteVisitor2 extends Visitor {
    public visitConcreteElementA(concreteElementA: ConcreteElementA) {
      console.log(`${concreteElementA.constructor.name} visited by ${this.constructor.name}`);
    }

    public visitConcreteElementB(concreteElementB: ConcreteElementB) {
      console.log(`${concreteElementB.constructor.name} visited by ${this.constructor.name}`);
    }
  }

  export abstract class Element {
    public abstract accept(visitor: Visitor);
  }

  export class ConcreteElementA extends Element {
    public accept(visitor: Visitor) {
      visitor.visitConcreteElementA(this);
    }

    public operationA() {
    }
  }

  export class ConcreteElementB extends Element {
    public accept(visitor: Visitor) {
      visitor.visitConcreteElementB(this);
    }

    public operationB() {
    }
  }

  export class ObjectStructure {
    private _elements: Set<Element> = new Set();

    public attach(element: Element) {
      this._elements.add(element);
    }

    public detach(element: Element) {
      this._elements.delete(element);
    }

    public accept(visitor: Visitor) {
      for (let element of this._elements) {
        element.accept(visitor);
      }
    }
  }
}

//*********************************************
(function run() {
  let o: VisitorModule.ObjectStructure = new VisitorModule.ObjectStructure();
  o.attach(new VisitorModule.ConcreteElementA());
  o.attach(new VisitorModule.ConcreteElementB());

  // Create visitor objects
  let v1: VisitorModule.ConcreteVisitor1 = new VisitorModule.ConcreteVisitor1();
  let v2: VisitorModule.ConcreteVisitor2 = new VisitorModule.ConcreteVisitor2();

  // Structure accepting visitors
  o.accept(v1);
  o.accept(v2);
}());