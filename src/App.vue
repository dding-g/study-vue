<template>
  <h1 class="name">Author : {{ greeting(authorRef) }}</h1>
  <h1 class="name">ID : {{ authorReactive.id }}</h1>
  <button class="btn btn-primary" v-on:click="updateName">Click</button>
</template>

<script>
import { ref, reactive } from "vue";

export default {
  setup() {
    const authorRef = ref("ddingg");
    const authorReactive = reactive({
      id: 1,
    });

    const greeting = (v) => `Hello ${v}`;

    const updateName = () => {
      authorRef.value = "update ddingg";
      authorReactive.id = 10;
    };

    return { authorRef, authorReactive, greeting, updateName };
  },
};
</script>

<style>
.name {
  color: purple;
}
</style>
