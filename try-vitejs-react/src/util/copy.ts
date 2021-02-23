export function copy(value: string) {
  let transfer = document.createElement("input");
  transfer.style.position = "absolute";
  transfer.style.opacity = "0";
  document.body.appendChild(transfer);
  transfer.value = value; // 这里表示想要复制的内容
  transfer.focus();
  transfer.select();
  if (document.execCommand("copy")) {
    document.execCommand("copy");
  }
  transfer.blur();
  console.log("复制成功");
  document.body.removeChild(transfer);
}
