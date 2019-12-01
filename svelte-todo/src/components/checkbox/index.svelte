<script>
  import IconTick from "../../assets/icon_tick.svg";
  export let size;
  export let status;
  function genClass(size, status) {
    let className = "checkbox";
    className = size === "sm" ? `${className} sm` : className;
    className = status === "complete" ? `${className} complete` : className;
    return className;
  }
  function onClick() {
    status = status === "complete" ? "" : "complete";
  }
</script>

<style>
  .checkbox {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 46px;
    height: 46px;
    border-radius: 6px;
    border: 2px solid #c4c4c4;
    box-sizing: border-box;
  }
  .checkbox > img {
    width: 27px;
  }
  .sm {
    width: 30px;
    height: 30px;
  }
  .sm > img {
    width: 17px;
  }
  .complete {
    border: 3px solid #28a820;
  }
</style>

<div type="radio" class={genClass(size, status)} on:click={onClick}>
  {#if status === 'complete'}
    <img alt="tick" src={IconTick} />
  {/if}
</div>
