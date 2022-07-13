<template>
  <div v-for="(todo, idx) in todos" :key="todo.id" class="card">
    <div class="card-body p-2 d-flex align-items-center">
      <div class="form-check flex-grow-1">
        <input
          class="form-check-input"
          type="checkbox"
          :value="todo.completed"
          @change="toggleTodo(idx)"
        />
        <label
          class="form-check-label"
          :class="{ todo: todo.completed }"
          :style="todo.completed ? todoStyle : {}"
        >
          {{ todo.subject }}
        </label>
      </div>
      <button class="btn btn-danger btn-sm" @click="deleteTodo(idx)">
        Delete
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
  emits: ["toggle-todo", "delete-todo"],
  setup(props, { emit }) {
    const toggleTodo = (idx) => {
      emit("toggle-todo", idx);
    };

    const deleteTodo = (idx) => {
      emit("delete-todo", idx);
    };

    return {
      toggleTodo,
      deleteTodo,
    };
  },
};
</script>

<style></style>
