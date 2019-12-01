<script>
  import classnames from "classnames";
  export let tag;
  export let text;
  export let level;
</script>

<style>
  .todo_text {
    width: 100%;
  }
  .tag {
    font-size: 12px;
    color: #828282;
    line-height: 1.5;
  }
  .text {
    font-size: 22px;
    color: #333333;
  }
  .item {
    font-size: 20px;
    color: #666666;
  }
</style>

<div class="todo_text">
  {#if tag}
    <div class="tag">{tag}</div>
  {/if}
  <div class={`text ${level}`}>{text}</div>
</div>
