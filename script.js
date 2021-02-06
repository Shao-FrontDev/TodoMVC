class Model {
  constructor() {
    this.todos = [
      { id: 1, text: "Run a marathon", complete: false },
      { id: 2, text: "Plant a garden", complete: false },
    ];
  }
  addTodo(todoText) {
    const todo = {
      id:
        this.todos.length > 0
          ? this.todos[this.todos.length - 1].id + 1
          : 1,
      text: todoText,
      complete: false,
    };
    this.todos.push(todo);
  }

  edit(id, updatedText) {
    this.todos = this.todos.map((todo) =>
      todo.id === id
        ? {
            id: todo.id,
            text: updatedText,
            complete: false,
          }
        : todo
    );
  }

  deleteTodo(id) {
    this.todos = thid.todos.filter(
      (todo) => todo.id !== id
    );
  }

  toggleTodo(id) {
    this.todos = this.todos.map((todo) =>
      todo.id === id
        ? {
            id: todo.id,
            text: todo.text,
            complete: !todo.complete,
          }
        : todo
    );
  }
}

class View {
  constructor() {
    this.app = this.getElement("#root");

    this.title = this.createElement("h1");
    this.title.textContent = "Todos";

    this.form = this.createElement("form");

    this.input = this.createElement("input");
    this.input.type = "text";
    this.input.placeholder = "Add todo";
    this.input.name = "todo";

    this.submitButton = this.createElement("button");
    this.submitButton.textContent = "Submit";

    this.todoList = this.createElement("ul", "todo-list");

    this.form.append(this.input, this.submitButton);

    this.app.append(this.title, this.form, this.todoList);
  }
  createElement(tag, className) {
    const element = document.createElement(tag);
    if (className) {
      element.classList.add(className);
    }
    return element;
  }
  getElement(selector) {
    const element = document.querySelector(selector);
    return element;
  }
}

class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }
}

const app = new Controller(new View(), new Model());
