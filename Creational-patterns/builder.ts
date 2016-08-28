class Director {
  public construct(builder: Builder) {
    builder.buildPartA();
    builder.buildPartB();
  }
}

abstract class Builder {
  public abstract buildPartA();
  public abstract buildPartB();
  public abstract getResult();
}

class ConcreteBuilder1 implements Builder {
  private _product:Product = new Product();

  public buildPartA() {
    this._product.add("PartA");
  }

  public buildPartB() {
    this._product.add("PartB");
  }

  public getResult() {
    return this._product;
  }
}

class ConcreteBuilder2 implements Builder {
  private _product:Product = new Product();

  public buildPartA() {
    this._product.add("PartY");
  }

  public buildPartB() {
    this._product.add("PartX");
  }

  public getResult() {
    return this._product;
  }
}

class Product {
  private _parts = [];

  public add(part:string) {
   this._parts.push(part);
  }

  public show() {
    console.log("Product Parts -------");
    for(let part of this._parts)
    console.log(part);
  }
}

//*********************************************
(function run() {
  let director = new Director();

  let builder1 = new ConcreteBuilder1();
  let builder2 = new ConcreteBuilder2();

  director.construct(builder1);
  let product1 = builder1.getResult();
  product1.show();

  director.construct(builder2);
  let product2 = builder2.getResult();
  product2.show();
}());