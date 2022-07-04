<template>
  <div class="container">
    <h1>TODO</h1>
    <form class="d-flex" @submit.prevent="addTodo">
      <div class="flex-grow-1 mr-2">
        <input class="form-control" type="text" v-model="todo" />
      </div>
      <div>
        <button class="btn btn-primary" type="submit">Click</button>
      </div>
    </form>
    <div v-if="todos.length === 0">추가된 TODO가 없습니다.</div>
    <div v-for="(todo, idx) in todos" :key="todo.id" class="card">
      <div class="card-body p-2 d-flex align-items-center">
        <div class="form-check flex-grow-1">
          <input
            class="form-check-input"
            type="checkbox"
            v-model="todo.completed"
          />
          <label
            class="form-check-label"
            :class="{ todo: todo.completed }"
            :style="todo.completed ? todoStyle : {}"
          >
            {{ todo.value }}
          </label>
        </div>
        <button class="btn btn-danger btn-sm" @click="deleteTodo(idx)">
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const todo = ref("ddingg");
    const todos = ref([]);
    const todoStyle = {
      textDecoration: "line-through",
      color: "gray",
    };

    const addTodo = () => {
      todos.value.push({
        id: Date.now(),
        value: todo.value,
        completed: false,
      });

      todo.value = "";
    };

    const deleteTodo = (idx) => {
      todos.value.splice(idx, 1);
    };

    return {
      addTodo,
      todo,
      todos,
      todoStyle,
      deleteTodo,
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
