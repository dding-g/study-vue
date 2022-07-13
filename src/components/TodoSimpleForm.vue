<template>
  <form
    class="d-flex"
    @submit.prevent="
      $emit('add-todo', {
        id: Date.now(),
        subject: todo,
        completed: false,
      })
    "
  >
    <div class="flex-grow-1 mr-2">
      <input
        class="form-control"
        type="text"
        v-model="todo"
        placeholder="Type new todo"
      />
    </div>
    <div>
      <button class="btn btn-primary" type="submit">Click</button>
    </div>
  </form>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const todo = ref("ddingg");

    return {
      todo,
    };
  },
};
</script>

<style></style>
