module FacadeModule {
  export class SubSystemOne {
    public methodOne() {
      console.log("SubSystemOne Method");
    }
  }

  export class SubSystemTwo {
    public methodTwo() {
      console.log("SubSystemTwo Method");
    }
  }

  export class SubSystemThree {
    public methodThree() {
      console.log("SubSystemThree Method");
    }
  }

  export class SubSystemFour {
    public methodFour() {
      console.log("SubSystemFour Method");
    }
  }

  export class Facade {
    private one: SubSystemOne;
    private two: SubSystemTwo;
    private three: SubSystemThree;
    private four: SubSystemFour;

    constructor() {
      this.one = new SubSystemOne();
      this.two = new SubSystemTwo();
      this.three = new SubSystemThree();
      this.four = new SubSystemFour();
    }

    public methodA() {
      console.log("\nMethodA() ---- ");
      this.one.methodOne();
      this.two.methodTwo();
      this.four.methodFour();
    }

    public methodB() {
      console.log("\nMethodB() ---- ");
      this.two.methodTwo();
      this.three.methodThree();
    }
  }
}

//*********************************************
(function run() {
  let facade: FacadeModule.Facade = new FacadeModule.Facade();

  facade.methodA();
  facade.methodB();
}());