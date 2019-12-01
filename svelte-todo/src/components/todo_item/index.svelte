<script>
  import Checkbox from "../checkbox/index.svelte";
  import TodoText from "../todo_text/index.svelte";

  export let props = {
    level : "group",
    tag:"",
    text:""
  };
</script>

<style>
  .todo-item {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    height: auto;
    width: 100%;
  }
  .checkbox-box {
    margin-right: 14px;
  }
</style>

<div>
  <div class="todo-item">
    <div class="checkbox-box">
      <Checkbox size={props.level === 'group' ? '' : 'sm'} />
    </div>
    <TodoText {...props} />
  </div>
</div>
