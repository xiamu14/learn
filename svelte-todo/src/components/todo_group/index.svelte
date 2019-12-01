<script>
  import TodoItem from "../todo_item";

  const todos = [
    {
      tag: "Design",
      text: "All screens created for all devices.",
      level: "group"
    },
    {
      text: "Component content is easily tweaked.",
      level: "item"
    },
    {
      text: "Default",
      level: "item"
    }
  ];
</script>

<style>
  .todo-group-box {
    width: 600px;
    padding: 37px 40px 65px;
    background-color: #eee;
    border-radius: 6px;
    box-sizing: border-box;
  }
  .todo-group {
    margin-bottom: 6px;
  }
  .todo-item {
    margin-left: 54px;
  }
  .todo-item::before {
    content: "|";
    width: 1px;
    height: 20px;
    color: #a8a8a8;
    margin-left: 13.5px;
  }
</style>

<div class="todo-group-box">
  {#each todos as todo}
    <div class={`todo-${todo.level}`}>
      <TodoItem props={todo} />
    </div>
  {/each}
</div>
