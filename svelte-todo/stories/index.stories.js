import Checkbox from '../src/components/checkbox';
import TodoText from '../src/components/todo_text/index.svelte';
import TodoItem from '../src/components/todo_item/index.svelte';
import TodoGroup from '../src/components/todo_group/index.svelte';
import List from '../src/components/list/index.svelte';
import Input from '../src/components/input/index.svelte';

export default {
  title: 'checklist',
};

export const checkbox = () => ({
  Component: Checkbox
})

export const checkboxWithSize = () => ({
  Component: Checkbox,
  props: {
    size: 'sm'
  }
})

export const todoText = () => ({
  Component: TodoText,
  props: {
    tag: "Design",
    text: "All screens created for all devices"
  }
})

export const todoItem = () => ({
  Component: TodoItem,
  props: {
    level: "group"
  }
})

export const todoGroup = () => ({
  Component: TodoGroup,
})

export const list = () => ({
  Component: List
})

export const input = () => ({
  Component: Input
})
