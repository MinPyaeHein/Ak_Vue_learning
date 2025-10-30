<script setup>
import { ref } from 'vue'
import { reactive } from 'vue'
import MenuBar from './components/MenuBar.vue'  

const form = reactive({
  name: '',
  age: null,
  email: '',
  address: ''
})

const entries = ref([])

function onSubmit() {

  entries.value.push({
    id: Date.now(),
    name: form.name,
    age: form.age,
    email: form.email,
    address: form.address
  })

  Object.assign(form, { name: '', age: null, email: '', address: '' })
}

function removeRow(id) {
  entries.value = entries.value.filter(e => e.id !== id)
}

</script>

<template>
 <MenuBar />
 <div class="wrap">
    <h2>Simple Profile Form</h2>

    <form class="card" @submit.prevent="onSubmit" novalidate>
      <div class="grid">
        <label class="field">
          <span>Name</span>
          <input v-model.trim="form.name" placeholder="Jane Doe" />
        </label>

        <label class="field">
          <span>Age</span>
          <input v-model.number="form.age" type="number" min="0" placeholder="0" />
        </label>

        <label class="field">
          <span>Email</span>
          <input v-model.trim="form.email" type="email" placeholder="jane@example.com" />
        </label>

        <label class="field full">
          <span>Address</span>
          <textarea v-model.trim="form.address" rows="2" placeholder="Street, City"></textarea>
        </label>
      </div>

      <div class="actions">
        <button type="submit">Submit</button>
      </div>
    </form>
        <h3>Saved Entries ({{ entries.length }})</h3>

    <div class="table-wrap" v-if="entries.length">
      <table>
        <thead>
          <tr>
            <th style="width: 20%">Name</th>
            <th style="width: 10%">Age</th>
            <th style="width: 25%">Email</th>
            <th>Address</th>
            <th style="width: 10%">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in entries" :key="row.id">
            <td>{{ row.name }}</td>
            <td>{{ row.age }}</td>
            <td>{{ row.email }}</td>
            <td>{{ row.address }}</td>
            <td>
              <button class="danger" type="button" @click="removeRow(row.id)">Remove</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <p v-else class="empty">No entries yet. Submit the form to add one.</p>
    </div>
</template>
<style>
:root {
  --bg: #f7f8fa;
  --card: #ffffff;
  --text: #1f2937;
  --muted: #6b7280;
  --border: #e5e7eb;
  --primary: #2563eb;
  --primary-contrast: #ffffff;
  --danger: #ef4444;
}

* { box-sizing: border-box; }

.wrap {
  max-width: 920px;
  margin: 2rem auto;
  padding: 0 1rem;
  color: var(--text);
}

h2 { margin: 0 0 1rem; }
h3 { margin: 2rem 0 0.75rem; }

.card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 1rem;
  box-shadow: 0 2px 10px rgba(0,0,0,.03);
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.9rem 1rem;
}

.field { display: flex; flex-direction: column; gap: 0.35rem; }
.field.full { grid-column: 1 / -1; }

.field > span {
  font-size: 0.9rem;
  color: var(--muted);
}

input, textarea {
  width: 100%;
  padding: 0.6rem 0.7rem;
  border: 1px solid var(--border);
  border-radius: 10px;
  outline: none;
  background: var(--bg);
  font: inherit;
}

input:focus, textarea:focus {
  border-color: #cbd5e1;
  box-shadow: 0 0 0 2px rgba(37,99,235,0.12);
  background: #fff;
}

.actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 0.6rem;
}

button {
  appearance: none;
  border: 1px solid var(--primary);
  background: var(--primary);
  color: var(--primary-contrast);
  padding: 0.55rem 1rem;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
}

button:hover { filter: brightness(0.98); }
button.danger {
  background: var(--danger);
  border-color: var(--danger);
}

.table-wrap {
  overflow-x: auto;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 14px;
  box-shadow: 0 2px 10px rgba(0,0,0,.03);
}

table {
  width: 100%;
  border-collapse: collapse;
}

thead th {
  text-align: left;
  font-weight: 600;
  color: var(--muted);
  background: #f9fafb;
  border-bottom: 1px solid var(--border);
  padding: 0.7rem 0.8rem;
}

tbody td {
  padding: 0.65rem 0.8rem;
  border-bottom: 1px solid var(--border);
}

.empty {
  color: var(--muted);
  margin-top: 0.5rem;
}
</style>