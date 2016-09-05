module StrategyModule {
  export abstract class Strategy {
    public abstract algorithmInterface();
  }

  export class ConcreteStrategyA extends Strategy {
    public algorithmInterface() {
      console.log("Called ConcreteStrategyA.AlgorithmInterface()");
    }
  }

  export class ConcreteStrategyB extends Strategy {
    public algorithmInterface() {
      console.log("Called ConcreteStrategyB.AlgorithmInterface()");
    }
  }

  export class ConcreteStrategyC extends Strategy {
    public algorithmInterface() {
      console.log("Called ConcreteStrategyC.AlgorithmInterface()");
    }
  }

  export class Context {
    private _strategy: Strategy;

    constructor(strategy: Strategy) {
      this._strategy = strategy;
    }

    public contextInterface() {
      this._strategy.algorithmInterface();
    }
  }
}

//*********************************************
(function run() {
  let context: StrategyModule.Context;

  // Three contexts following different strategies
  context = new StrategyModule.Context(new StrategyModule.ConcreteStrategyA());
  context.contextInterface();

  context = new StrategyModule.Context(new StrategyModule.ConcreteStrategyB());
  context.contextInterface();

  context = new StrategyModule.Context(new StrategyModule.ConcreteStrategyC());
  context.contextInterface();
}());