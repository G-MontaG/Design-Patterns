module CompositeModule {
  export abstract class Component {
    protected name: string;

    constructor(name: string) {
      this.name = name;
    }

    public abstract add(c: Component);

    public abstract remove(c: Component);

    public abstract display(depth: number);
  }

  export class Composite extends Component {
    private _children: Array<Component> = [];

    constructor(name: string) {
      super(name)
    }

    public add(component: Component) {
      this._children.push(component);
    }

    public remove(component: Component) {
      this._children = this._children.filter((item) => {
        return item !== component;
      });
    }

    public display(depth: number) {
      console.log(`${depth} ${this.name}`);

      for (let component of this._children) {
        component.display(depth + 2);
      }
    }
  }

  export class Leaf extends Component {
    constructor(name: string) {
      super(name);
    }

    public add(c: Component) {
      console.log("Cannot add to a leaf");
    }

    public remove(c: Component) {
      console.log("Cannot remove from a leaf");
    }

    public display(depth: number) {
      console.log(`${depth} ${this.name}`);
    }
  }
}

//*********************************************
(function run() {
  let root = new CompositeModule.Composite('root');
  root.add(new CompositeModule.Leaf('Leaf A'));
  root.add(new CompositeModule.Leaf('Leaf B'));

  let copm = new CompositeModule.Composite('Composite X');
  copm.add(new CompositeModule.Leaf('Leaf XA'));
  copm.add(new CompositeModule.Leaf('Leaf XB'));

  root.add(copm);
  root.add(new CompositeModule.Leaf('Leaf C'));

  // Add and remove a leaf
  let leaf = new CompositeModule.Leaf('Leaf D');
  root.add(leaf);
  root.remove(leaf);

  // Recursively display tree
  root.display(1);
}());