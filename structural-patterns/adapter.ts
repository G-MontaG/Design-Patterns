module AdapterModule {
  export class Target {
    public request() {
      console.log("Called Target Request()");
    }
  }

  export class Adapter extends Target {
    private _adapteeInstance;

    constructor(adapteeInstance: Adaptee) {
      super();
      this._adapteeInstance = adapteeInstance;
    }

    public request() {
      // Possibly do some other work
      // and then call SpecificRequest
      this._adapteeInstance.specificRequest();
    }
  }

  export class Adaptee {
    public specificRequest() {
      console.log("Called SpecificRequest()");
    }
  }
}

//*********************************************
(function run() {
  let target: AdapterModule.Target = new AdapterModule.Adapter(new AdapterModule.Adaptee);
  target.request();
}());