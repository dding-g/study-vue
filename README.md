# vue 공부용

- vue2 -> vue3 로 넘어오면서 컴포넌트가 <div> 태그로 한번 감싸지는 부분이 삭제되었음.
- 렌더링시점
  - react로 따지면 setState가 실행 될 때 dom이 re-render 됨. vue는 그 시점이 어디인지?
  - `import { ref } from 'vue'` 사용. 데이터가 바뀔 때 다시 렌더링 되는걸 vue에서는 `리액티브 변화`라고 함. [documnet](https://kr.vuejs.org/v2/guide/reactivity.html)
