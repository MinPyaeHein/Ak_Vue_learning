<template>
  <div>
    <h2>Posts</h2>

    <button @click="loadPosts" :disabled="loading">
      {{ loading ? 'Loading...' : 'Load Posts' }}
    </button>

    <p v-if="error" style="color: red">{{ error }}</p>

    <ul v-if="customers.length">
      <li v-for="customer in customers" :key="customer.id">
        <strong>{{ customer.name}}</strong>
        <p>{{ customer.phone }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const customers = ref([])
const loading = ref(false)
const error = ref('')

async function loadPosts() {
  loading.value = true
  error.value = ''

  try {
    const res = await axios.get('http://localhost:8080/api/customers')
    console.log(res)
    customers.value = res.data
  } catch (e) {
    console.log(e)
    // Axios wraps error
    if (axios.isAxiosError(e)) {
      error.value = e.message
    } else {
      error.value = 'Unknown error'
    }
  } finally {
    loading.value = false
  }
}
</script>

<!-- <template>
  <div>
    <h2>Users</h2>

    <button @click="loadUsers" :disabled="loading">
      {{ loading ? 'Loading...' : 'Load Users' }}
    </button>

    <p v-if="error" style="color: red">{{ error }}</p>

    <ul v-if="users.length">
      <li v-for="user in users" :key="user.id">
        {{ user.name }} – {{ user.email }}
      </li>
    </ul>
  </div>
</template> -->
<!-- 
<script setup>
import { ref } from 'vue'

const users = ref([])
const loading = ref(false)
const error = ref('')

async function loadUsers() {
  loading.value = true
  error.value = ''

  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')

    if (!res.ok) {
      throw new Error('Network response was not ok')
    }

    const data = await res.json()
    users.value = data
  } catch (e) {
    error.value = e instanceof Error ? e.message : 'Unknown error'
  } finally {
    loading.value = false
  }
}
</script> 
 -->
