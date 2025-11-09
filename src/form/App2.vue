<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  age: null,
  email: '',
  address: ''
})

const entries = ref([])

function addStudent () {
    if (!form.value.name || !form.value.age || !form.value.email || !form.value.address) {
    alert('Please fill all fields')
    return
  }
  entries.value.push({
    id: Date.now(),
    name: form.value.name,
    age: Number(form.value.age),
    email: form.value.email,
    address: form.value.address
  })
  cleanForm()
}

function cleanForm () {
  form.value.name = ''
  form.value.age = null
  form.value.email = ''
  form.value.address = ''
}

</script>

<template>
  <main class="card" aria-label="Student Register">
    <h2 class="title">Student Register</h2>

    <div class="grid">
      <form @submit.prevent="addStudent" @reset.prevent="cleanForm">
        <label>Name</label>
        <input v-model.trim="form.name" type="text" placeholder="Enter name" />

        <label>Age</label>
        <input v-model.number="form.age" type="number" min="1" placeholder="Enter age" />

        <label>Email</label>
        <input v-model.trim="form.email" type="email" placeholder="Enter email" />

        <label>Address</label>
        <input v-model.trim="form.address" type="text" placeholder="Enter address" />

        <div class="buttons">
          <button type="submit">Save</button>
          <button type="reset">Clear</button>
        </div>
      </form>
    </div>
    <div style="margin-top: 24px">
      <table style="width:100%; border-collapse: collapse; border:2px solid var(--border)">
        <thead>
          <tr>
            <th style="border:1px solid var(--border); padding:8px; text-align:left">#</th>
            <th style="border:1px solid var(--border); padding:8px; text-align:left">Name</th>
            <th style="border:1px solid var(--border); padding:8px; text-align:left">Age</th>
            <th style="border:1px solid var(--border); padding:8px; text-align:left">Email</th>
            <th style="border:1px solid var(--border); padding:8px; text-align:left">Address</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="entries.length === 0">
            <td colspan="5" style="border:1px solid var(--border); padding:8px; text-align:center; opacity:.7">
              No data yet. Add a student.
            </td>
          </tr>
          <tr v-for="(s, i) in entries" :key="s.id">
            <td style="border:1px solid var(--border); padding:8px">{{ i + 1 }}</td>
            <td style="border:1px solid var(--border); padding:8px">{{ s.name }}</td>
            <td style="border:1px solid var(--border); padding:8px">{{ s.age }}</td>
            <td style="border:1px solid var(--border); padding:8px">{{ s.email }}</td>
            <td style="border:1px solid var(--border); padding:8px">{{ s.address }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>
<style scoped>
   :root { --border:#444; --bg:#fff; --ink:#111; --accent:#2563eb; }
* { box-sizing: border-box; }
body {
  margin: 0; min-height: 100vh; display: grid; place-items: center;
  font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif; color: var(--ink);
  background: #f7f7f8;
}
.card {
  width: min(720px, 92vw);
  background: var(--bg);
  border: 2px solid var(--border);
  border-radius: 12px;
  padding: 28px 28px 32px;
  box-shadow: 0 8px 30px rgba(0,0,0,.06);
}
.title { margin: 0 0 18px; font-weight: 700; letter-spacing: .4px; }
.grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 14px 22px;
  align-items: center;
}
label { font-weight: 600; }
input {
  width: 100%;
  padding: 10px 12px;
  border: 2px solid var(--border);
  border-radius: 8px;
  font-size: 16px;
  background: #fff;
}
.buttons {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px 22px;
  margin-top: 8px;
}
button {
  padding: 10px 14px;
  border: 2px solid var(--border);
  background: #fff;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
}
@media (max-width: 540px) {
  .grid { grid-template-columns: 1fr; }
}
</style>
