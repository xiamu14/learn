var { observable, autorun } = require('mobx');

var todoStore = observable({
  todos: [],
  get completedCount() {
    return this.todos.filter(todo => todo.completed).length;
  }
});

autorun(() => {
  console.log(`Completed ${todoStore.completedCount} of ${todoStore.todos.length}`);
});

todoStore.todos[0] = {
  title: 'Take a walk',
  completed: false
};

todoStore.todos[1] = {
  title: 'have a drink',
  completed: true
}
