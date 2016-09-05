module ObserverModule {
  export abstract class Subject {
    private _observers: Set<Observer> = new Set();

    public attach(observer: Observer) {
      this._observers.add(observer);
    }

    public detach(observer: Observer) {
      this._observers.delete(observer);
    }

    public notify() {
      for (let o of this._observers) {
        o.update();
      }
    }
  }

  export class ConcreteSubject extends Subject {
    private _subjectState: string;

    public get subjectState(): string {
      return this._subjectState;
    }

    public set subjectState(value: string) {
      this._subjectState = value;
    }
  }

  export abstract class Observer {
    public abstract update();
  }

  export class ConcreteObserver extends Observer {
    private _name: string;
    private _observerState: string;
    private _subject: ConcreteSubject;

    constructor(subject: ConcreteSubject, name: string) {
      super();
      this._subject = subject;
      this._name = name;
    }

    public update() {
      this._observerState = this._subject.subjectState;
      console.log(`Observer ${this._name}'s new state is ${this._observerState}`);
    }

    public get subject(): ConcreteSubject {
      return this._subject;
    }

    public set subject(value: ConcreteSubject) {
      this._subject = value;
    }
  }
}

//*********************************************
(function run() {
  let s: ObserverModule.ConcreteSubject = new ObserverModule.ConcreteSubject();

  s.attach(new ObserverModule.ConcreteObserver(s, "X"));
  s.attach(new ObserverModule.ConcreteObserver(s, "Y"));
  s.attach(new ObserverModule.ConcreteObserver(s, "Z"));

  // Change subject and notify observers
  s.subjectState = "ABC";
  s.notify();
}());