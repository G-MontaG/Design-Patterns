module BuilderModule {
  export class Director {
    public construct(builder: Builder) {
      builder.buildPartA();
      builder.buildPartB();
    }
  }

  export abstract class Builder {
    public abstract buildPartA();

    public abstract buildPartB();

    public abstract getResult():Product;
  }

  export class ConcreteBuilder1 extends Builder {
    private _product: Product = new Product();

    public buildPartA() {
      this._product.add("PartA");
    }

    public buildPartB() {
      this._product.add("PartB");
    }

    public getResult():Product {
      return this._product;
    }
  }

  export class ConcreteBuilder2 extends Builder {
    private _product: Product = new Product();

    public buildPartA() {
      this._product.add("PartY");
    }

    public buildPartB() {
      this._product.add("PartX");
    }

    public getResult():Product {
      return this._product;
    }
  }

  export class Product {
    private _parts = [];

    public add(part: string) {
      this._parts.push(part);
    }

    public show() {
      console.log("Product Parts -------");
      for (let part of this._parts)
        console.log(part);
    }
  }
}

//*********************************************
(function run() {
  let director: BuilderModule.Director = new BuilderModule.Director();

  let builder1: BuilderModule.Builder = new BuilderModule.ConcreteBuilder1();
  let builder2: BuilderModule.Builder = new BuilderModule.ConcreteBuilder2();

  director.construct(builder1);
  let product1: BuilderModule.Product = builder1.getResult();
  product1.show();

  director.construct(builder2);
  let product2: BuilderModule.Product = builder2.getResult();
  product2.show();
}());