<template>
  <router-view></router-view>
  <div class="container">
    <h2>TODO</h2>
    <input
      class="form-control"
      type="text"
      v-model="searchText"
      placeholder="Search"
    />
    <hr />
    <TodoSimpleForm @add-todo="addTodo" />
    <div v-if="filteredTodos.length === 0">Nothing to search.</div>
    <TodoList
      :todos="filteredTodos"
      @toggle-todo="toggleTodo"
      @delete-todo="deleteTodo"
    />
  </div>
</template>

<script>
import { computed, ref } from "vue";
import axios from "axios";
import TodoSimpleForm from "@/components/TodoSimpleForm.vue";
import TodoList from "@/components/TodoList.vue";

export default {
  components: {
    TodoSimpleForm,
    TodoList,
  },
  setup() {
    const todos = ref([]);
    const todoStyle = {
      textDecoration: "line-through",
      color: "gray",
    };

    const deleteTodo = (idx) => {
      todos.value.splice(idx, 1);
    };

    const addTodo = async (todo) => {
      try {
        const { data } = await axios.post("http://localhost:3000/todos", {
          subject: todo.subject,
          completed: todo.completed,
        });

        todos.value.push(data);
      } catch (err) {
        console.log(err);
      }
    };

    const toggleTodo = (idx) => {
      todos.value[idx].completed = !todos.value[idx].completed;
    };

    const searchText = ref("");

    const filteredTodos = computed(() => {
      if (searchText.value) {
        return todos.value.filter((todo) =>
          todo.value.includes(searchText.value)
        );
      }

      return todos.value;
    });

    return {
      todos,
      todoStyle,
      addTodo,
      deleteTodo,
      toggleTodo,
      searchText,
      filteredTodos,
    };
  },
};
</script>

<style>
.name {
  color: purple;
}

.title {
  color: red;
}

.todo {
  text-decoration: line-through;
  color: gray;
}
</style>
