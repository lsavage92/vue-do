<template>
  <ul class="todo-list">
    <todo @click.native="removeTodo(index)" v-for="(todo, index) in todos" :todo="todo"></todo>
  </ul>
</template>

<script>
import todo from './todo.vue'

export default {
  props: ['todos'],
  data() {
    return { }
  },
  methods: {
    removeTodo(index) {
      this.todos.splice(index, 1);
    }
  },
  components: {
    todo
  }
}
</script>

<style>

</style>