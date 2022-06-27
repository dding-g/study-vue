<template>
  <h1 :class="titleClass">Author : {{ greeting(authorRef) }}</h1>
  <h1 class="name">ID : {{ authorReactive.id }}</h1>

  <input :type="inputType" :value="authorRef" @input="updateName" />
  <input :type="inputType" v-model="authorRef" />
  <button class="btn btn-primary" @click="updateName">Click</button>
</template>

<script>
import { ref, reactive } from "vue";

export default {
  setup() {
    const authorRef = ref("ddingg");
    const authorReactive = reactive({
      id: 1,
    }); // object or array만 reactive에서 사용 가능

    const inputType = "number";

    const titleClass = ref("name");

    const greeting = (v) => `Hello ${v}`;

    // const updateName = () => {
    //   authorRef.value = "update ddingg";
    //   titleClass.value = "title";
    //   authorReactive.id = 10;
    // };

    const updateName = (e) => {
      authorRef.value = e.target.value;
    };

    return {
      titleClass,
      authorRef,
      authorReactive,
      inputType,
      greeting,
      updateName,
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
