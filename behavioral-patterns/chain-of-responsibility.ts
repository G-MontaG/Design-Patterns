module ChainModule {
  export abstract class Handler {
    protected successor: Handler;

    public setSuccessor(successor: Handler) {
      this.successor = successor;
    }

    public abstract handleRequest(request: number);
  }

  export class ConcreteHandler1 extends Handler {
    public handleRequest(request: number) {
      if (request >= 0 && request < 10) {
        console.log(`${this.constructor.name} handled request ${request}`);
      } else if (this.successor !== null) {
        this.successor.handleRequest(request);
      }
    }
  }

  export class ConcreteHandler2 extends Handler {
    public handleRequest(request: number) {
      if (request >= 10 && request < 20) {
        console.log(`${this.constructor.name} handled request ${request}`);
      } else if (this.successor !== null) {
        this.successor.handleRequest(request);
      }
    }
  }

  export class ConcreteHandler3 extends Handler {
    public handleRequest(request: number) {
      if (request >= 20 && request < 30) {
        console.log(`${this.constructor.name} handled request ${request}`);
      } else if (this.successor !== null) {
        this.successor.handleRequest(request);
      }
    }
  }
}

//*********************************************
(function run() {
  let h1: ChainModule.Handler = new ChainModule.ConcreteHandler1();
  let h2: ChainModule.Handler = new ChainModule.ConcreteHandler2();
  let h3: ChainModule.Handler = new ChainModule.ConcreteHandler3();
  h1.setSuccessor(h2);
  h2.setSuccessor(h3);

  // Generate and process request
  let requests: Array<number> = [2,5,14,22,18,3,27,20];

  for(let request of requests) {
    h1.handleRequest(request);
  }
}());