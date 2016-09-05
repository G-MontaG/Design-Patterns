module TemplateModule {
  export abstract class AbstractClass {
    public abstract primitiveOperation1();
    public abstract primitiveOperation2();

    public templateMethod() {
      this.primitiveOperation1();
      this.primitiveOperation2();
      console.log("");
    }
  }

  export class ConcreteClassA extends AbstractClass {
    public primitiveOperation1() {
      console.log("ConcreteClassA.PrimitiveOperation1()");
    }
    public primitiveOperation2(){
        console.log("ConcreteClassA.PrimitiveOperation2()");
    }
  }

  export class ConcreteClassB extends AbstractClass {
    public primitiveOperation1() {
      console.log("ConcreteClassB.PrimitiveOperation1()");
    }
    public primitiveOperation2(){
      console.log("ConcreteClassB.PrimitiveOperation2()");
    }
  }
}

//*********************************************
(function run() {
  let aA: TemplateModule.AbstractClass = new TemplateModule.ConcreteClassA();
  aA.templateMethod();

  let aB: TemplateModule.AbstractClass = new TemplateModule.ConcreteClassB();
  aB.templateMethod();
}());