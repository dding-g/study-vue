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
    <div v-for="todo in todos" :key="todo.id" class="card">
      <div class="card-body p-2">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            v-model="todo.completed"
          />
          <label
            class="form-check-label"
            :class="{ todo: todo.completed }"
            :style="todo.completed ? todoStype : {}"
          >
            {{ todo.value }}
          </label>
        </div>
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
    const todoStype = {
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

    return {
      addTodo,
      todo,
      todos,
      todoStype,
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
