export function size(
  w: string,
  h: string,
  objectFit?: string,
  objectPosition?: string
) {
  return `
        width: ${w};
        height: ${w};
    `;
}

export function text(color: string, font: { size: string; weight: string }) {
  return `
        color: ${color};
        font-size: ${font.size};
        font-weight: ${font.weight};
    `;
}

export function hStack(align?: string, space?: string) {
  return `
        display: flex;
    `;
}

export function vStack() {
  return `
        display: flex;
        flex-direction: column;
    `;
}

export function grid(
  columns?: string,
  rows?: string,
  place?: string,
  gap?: string
) {
  return `
    display: grid;
  `;
}

export function inlineGrid(
  columns?: string,
  rows?: string,
  place?: string,
  gap?: string
) {
  return `
      display: inline-grid;
    `;
}

export function gridItem(params: { column: string; row: string }) {
  return "";
}

export function relative(offset: string, zIndex: number) {
  return `
        display: block;
        position: relative;
        top: ${offset};
        z-index: ${zIndex};
    `;
}

export function absolute() {
  return "";
}

export function fixed() {
  return "";
}

export function border() {
  return "";
}

// margin - 外部间隙；padding - 内部空隙
export function boxSpace(margin: string, padding: string) {
  return "";
}

// 背景相关的
export function background() {}

export function ellipsis(width: string) {
  return ``;
}

// 透明
export function opacity() {
  return "";
}

// 是否可见
export function visible() {
  return 'display: unset'
}

// shape 等样式片段
export function circle(size: string) {
  return `
        width: ${size},
        height: ${size},
        border-radius: 50%;
    `;
}

export function backgroundImg(src: string, mode?: string) {
  return `
        background: url(${src}) center center no-repeat;
        background-size: ${mode};
    `;
}

// layout 布局片段
export function flexCenter() {
  return "";
}

export function flexBetween() {
  return "";
}

export function flexColCenter() {
  return ``;
}

export function flexColBetween() {
  return "";
}

export function styled(...params: string[]) {
  console.log(params);
  return "";
}
