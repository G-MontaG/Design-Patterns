module ProxyModule {
  export abstract class Subject {
    public abstract request();
  }

  export class RealSubject extends Subject {
    public request() {
      console.log("Called RealSubject.Request()");
    }
  }

  export class Proxy extends Subject {
    private realSubject: RealSubject;

    public request() {
      if (this.realSubject == null) {
        this.realSubject = new RealSubject();
      }
      this.realSubject.request();
    }
  }
}

//*********************************************
(function run() {
  let proxy: ProxyModule.Proxy = new ProxyModule.Proxy();
  proxy.request();
}());