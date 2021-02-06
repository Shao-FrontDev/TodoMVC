class Model {
  constructor() {}
}

class View {
  constructor() {}
}

class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }
}

const app = new Controller(new View(), new Model());


