<script>
  import IconPlus from "../../assets/icon_plus.svg";
  let html = "";
  function onInput() {
    html = html.replace(/[2]/gi, '<span class="tag">奇怪</span>');
    console.log('%c奇怪', 'background: #69c0ff; color: white; padding: 4px', html);

  }
</script>

<style>
  :global(span.tag) {
    border: 1px solid #096dd9;
    background: #1890ff;
    color: #ffffff;
    padding: 2px 4px;
    border-radius: 2px;
  }
  .input-box {
    width: 600px;
    position: relative;
  }
  .input-box > .input-text {
    width: 600px;
    height: 38px;
    box-sizing: border-box;
    padding: 4px 12px;
    font-size: 14px;
    line-height: 30px;
    color: #333333;
    outline-color: invert;
    outline-style: none;
    outline-width: 0px;
    outline-color: transparent;
    box-shadow: none;
    border-radius: 2px;
    border: 1px solid #333333;
    color: #888888;
  }
  .input-box > .input-text:empty::before {
    content: attr(placeholder);
    color: #999;
  }
  .input-box > .input-text:focus::before {
    content: none;
  }
  .input-box > .btn_add {
    position: absolute;
    right: 4px;
    top: 4.5px;
    width: auto;
    height: 30px;
    padding: 0 8px;
    box-sizing: border-box;
    outline: none;
    background-color: #ffffff;
    outline: none;
    cursor: pointer;
  }
</style>

<svelte:head>
  <link rel="stylesheet" href="../../styles/index.css" />
</svelte:head>
<div class="input-box">
  <div
    class="input-text"
    contenteditable="plaintext-only"
    placeholder="添加事件"
    on:input={onInput}
    bind:innerHTML={html} />
  <div type="submit" class="btn_add">
    <img src={IconPlus} alt="icon plus" />
  </div>
</div>
