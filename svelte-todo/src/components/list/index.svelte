<script>
  import TodoGroup from "../todo_group";
  import Input from "../input";
</script>

<style>
  .list-box > h1{
    margin: 0;
    color: #222222;
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .input--box {
    margin-bottom: 30px;
  }
</style>

<div class="list-box">
  <h1>Master Components</h1>
  <div class="input--box">
    <Input />
  </div>
  <TodoGroup />
</div>
