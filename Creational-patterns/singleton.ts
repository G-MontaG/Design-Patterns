module SingletonModule {
  export class Singleton {
    private static _instance = null;

    public static getInstance() {
      if (this._instance == null) {
        this._instance = new Singleton();
      }
      return this._instance;
    }
  }
}

//*********************************************
(function run() {
  let singleton1 = SingletonModule.Singleton.getInstance();
  let singleton2 = SingletonModule.Singleton.getInstance();

  console.log(singleton1 == singleton2);
}());