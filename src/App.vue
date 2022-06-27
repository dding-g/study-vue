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
  </div>
  {{ todos }}
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const todo = ref("ddingg");
    const todos = ref([]);

    const addTodo = (e) => {
      e.preventDefault();

      todos.value.push({
        id: Date.now(),
        value: e.target.value,
      });
    };

    return {
      addTodo,
      todo,
      todos,
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
</style>
