<template>
  <div id="app">
    <div class="logo">
      <img src="../assets/logo.png"><span class="logo-remainder">ueDo</span>
      <span class="tagline">The New ToDo app that you, too, can do in Vue 2</span>
    </div>
    <form v-on:submit.prevent="addTodo(newTodo)">
      <input type="text" v-model="newTodo" placeholder="new todo">
    </form>
    <todoList :todos="todos"></todoList>
  </div>
</template>

<script>
import todoList from './todo-list.vue'

export default {
  data () {
    return {
      newTodo: '',
      todos: []
    }
  },
  methods: {
    addTodo(todo) {
      this.todos.push(todo);
      this.newTodo = '';
      console.log(this.todos);
    },
  },
  components: {
    todoList
  }
}
</script>



<style>
body {
  font-family: Helvetica, sans-serif;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
#app {
  text-align: center;
}
.logo-remainder {
  position: absolute;
  top: 30px;
  font-size: 40px;
}
.tagline {
  position:  absolute;
  top: 75px;
}
</style>
