module InterpreterModule {
  export class Context {
  }

  export abstract class AbstractExpression {
    public abstract interpret(context: Context);
  }

  export class TerminalExpression extends AbstractExpression {
    public interpret(context: Context) {
      console.log("Called Terminal.Interpret()");
    }
  }

  export class NonterminalExpression extends AbstractExpression {
    public interpret(context: Context) {
      console.log("Called Nonterminal.Interpret()");
    }
  }
}

//*********************************************
(function run() {
  let context: InterpreterModule.Context = new InterpreterModule.Context();

  // Usually a tree
  let list: Array<any> = [];

  list.push(new InterpreterModule.TerminalExpression());
  list.push(new InterpreterModule.NonterminalExpression());
  list.push(new InterpreterModule.TerminalExpression());
  list.push(new InterpreterModule.TerminalExpression());

  // Interpret
  for(let exp of list) {
    exp.interpret(context);
  }
}());