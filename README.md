# vue 공부용

- vue2 -> vue3 로 넘어오면서 컴포넌트가 <div> 태그로 한번 감싸지는 부분이 삭제되었음.
- 렌더링시점
  - react로 따지면 setState가 실행 될 때 dom이 re-render 됨. vue는 그 시점이 어디인지?
  - `import { ref } from 'vue'` 사용. 데이터가 바뀔 때 다시 렌더링 되는걸 vue에서는 `리액티브 변화`라고 함. [documnet](https://kr.vuejs.org/v2/guide/reactivity.html)
  - `import { reactivity } from 'vue'`는 `ref`처럼 `리액티브`한 효과를 줄 수 있지만 `array` `object` 만 취급이 가능하다. (`ref`는 모든 자료형 가능)
- `v-on:` -> `@` 로 생략 가능. `v-bind` 전체 생략 가능.
- `oninput` `onchange` 차이
  - `onchange`는 요소의 값이 정해질 때. 포커스를 잃었을 때 발동되고 `oninput`은 요소의 값이 변경되는 즉시 발동된다. 따라서 `oninput`이 `onchange`보다 먼저 실행된다. [medium](https://medium.com/@madgb00/input-type-range-1-onchange-oninput-%EB%B9%84%EA%B5%90-664b58b3f6c)
- 양방향 바인딩(v-model)
  - ```
    <input :type="inputType" :value="authorRef" @input="updateName" />
    <input :type="inputType" v-model="authorRef" />
    ```
  - 두개는 같은 동작을 함. value, input 두개 다 바인딩 해줄 필요 없이 v-model 사용으로 한번에 가능
- `form`에서 `preventDefault`를 vue방식으로 표현 할 수 있음.
  - [document](https://kr.vuejs.org/v2/guide/syntax.html#%EC%88%98%EC%8B%9D%EC%96%B4)에서 볼 수 있음.
  - ``
