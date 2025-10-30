<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  age: null,
  email: '',
  address: ''
})

const entries = ref([])

function submit() {
  entries.value.push({ ...form.value, id: Date.now() })
  form.value = { name: '', age: null, email: '', address: '' } 
}
</script>

<template>
  <form @submit.prevent="submit">
    <input v-model="form.name" placeholder="Name" />
    <input v-model.number="form.age" type="number" placeholder="Age" />
    <input v-model="form.email" placeholder="Email" />
    <textarea v-model="form.address" placeholder="Address" />
    <button>Submit</button>
  </form>
  <p>{{ form.name }}</p>

  <pre>{{ entries }}</pre>
</template>
