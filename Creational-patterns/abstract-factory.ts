abstract class AbstractFactory {
  public abstract createProduct();
}

class ConcreteFactory1 implements AbstractFactory {
  public createProduct() {
    return new Product1();
  }
}

class ConcreteFactory2 implements AbstractFactory {
  public createProduct() {
    return new Product2();
  }
}

abstract class AbstractProduct {
  public abstract test();
}

class Product1 implements AbstractProduct {
  public test() {
    console.log("Product1");
  }
}

class Product2 implements AbstractProduct {
  public test() {
    console.log("Product2");
  }
}

//*********************************************
(function run() {
  let factory1 = new ConcreteFactory1();
  let product1 = factory1.createProduct();
  product1.test();

  let factory2 = new ConcreteFactory2();
  let product2 = factory2.createProduct();
  product2.test();
}());