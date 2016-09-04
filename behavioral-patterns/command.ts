module CommandModule {
  export abstract class Command {
    protected receiver: Receiver;

    constructor(receiver: Receiver) {
      this.receiver = receiver;
    }

    public abstract execute();
  }

  export class ConcreteCommand extends Command {
    public execute() {
      this.receiver.action();
    }
  }

  export class Receiver {
    public action() {
      console.log("Called Receiver.Action()");
    }
  }

  export class Invoker {
    private command: Command;

    public setCommand(command: Command) {
      this.command = command;
    }

    public executeCommand() {
      this.command.execute();
    }
  }
}

//*********************************************
(function run() {
  let receiver: CommandModule.Receiver = new CommandModule.Receiver();
  let command: CommandModule.Command = new CommandModule.ConcreteCommand(receiver);
  let invoker: CommandModule.Invoker = new CommandModule.Invoker();

  // Set and execute command
  invoker.setCommand(command);
  invoker.executeCommand();
}());