<script setup>
import { ref } from 'vue'
const count = ref(0)
function add() {
  count.value = count.value + 1
  console.log("count-->",count)
}
const name = ref('')
const imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxMMWd08C5AE2EXAyUKJ_5SLvDntWHayN0uA&s"
const isLoggedIn = ref(false)
const showDetail = ref(true)
const todos = [
  { id: 1, text: 'Study Vue' },
  { id: 2, text: 'Drink water' },
  { id: 3, text: 'Sleep 😴' }
]
const htmlMsg = '<b>This is bold HTML</b>'
const isActive = ref(true)
const firstName = ref('Min')
const lastName = ref('Hein')
const age = ref(20)
</script>

<template>
  <input v-model="name" placeholder="Your name" />
  <p>Hello, {{ name }}</p>
  <img v-bind:src="imageUrl"><br></br>
  <button @click="add">Clicked {{ count }} times</button>

  <div v-if="isLoggedIn">
    Welcome back 🫶
  </div>
  <div v-else>
    Please log in
  </div>

  <p v-show="showDetail">
    Secret info 👀
  </p>

  <button @click="showDetail = !showDetail">
    Toggle
  </button>
   <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.text }}
    </li>
  </ul>
   <p v-html="htmlMsg"></p>
  <div :class="{ active: false, disabled: !isActive }">
    Status box
  </div>
  <div :class="{ active: true, disabled: true }">
    Status box
  </div>
  <div v-memo="[firstName, lastName]">
    <p>{{ firstName }} {{ lastName }}</p>
    <p>Age: {{ age }}</p>
  </div>
  <button @click="age++">Grow older</button>
  

</template>
<style>
.active { border: 2px solid green; }
.disabled { opacity: 0.5; }
</style>