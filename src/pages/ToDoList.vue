<script setup>
import { ref, reactive } from 'vue'
const updateStatus=ref(false)
const form = reactive({
  job: '',
  startTime: '',
  endTime: '',
  status: '',
})
 
const entries = ref([])

function updateForm(row){
   updateStatus.value=true
   form.id=row.id
   form.job=row.job
   form.startTime=row.startTime
   form.endTime=row.endTime
   form.status=row.status
}

function updateData(){
  const updateObj=entries.value.find(todo=>todo.id==form.id)
  updateObj.id= form.id
  updateObj.job=form.job
  updateObj.startTime= form.startTime
  updateObj.endTime=form.endTime
  updateObj.status=form.status
}
 
function onSubmit() {
  if(form.job ==='' || form.startTime === ''|| form.endTime === '' || form.status === '' ){
     alert("Please fill the value in the form")
     return
  }
  entries.value.push({
    id: Date.now(),
    job: form.job,
    startTime: form.startTime,
    endTime: form.endTime,
    status: form.status,
  })
  Object.assign(form, { job: '', startTime: '', endTime: '', status: '' })
}
 
function clearForm() {
  Object.assign(form, { job: '', startTime: '', endTime: '', status: '' })
}
 
function removeRow(id) {
  entries.value = entries.value.filter((e) => e.id !== id)
}
</script>
 
<template>
  <div class="wrap">
    <h2>{{ updateStatus ? 'Update To Do List Form' : 'To Do List Register Form' }}</h2>
 
    <form class="card" @submit.prevent="onSubmit">
      <div class="grid">
        <label class="field">
          <span>Job</span>
          <input v-model.trim="form.job" placeholder="e.g., Submit report" />
        </label>
 
        <label class="field">
          <span>Start Time</span>
          <input v-model="form.startTime" type="time" placeholder="12:30" />
        </label>
 
        <label class="field">
          <span>End Time</span>
          <input v-model="form.endTime" type="time" placeholder="12:30" />
        </label>
 
        <div class="field full">
          <span>Status</span>
          <div class="radios">
            <label class="radio">
              <input type="radio" value="Not Started" v-model="form.status" />
              <span>Not Started</span>
            </label>
            <label class="radio">
              <input type="radio" value="Doing" v-model="form.status" />
              <span>Doing</span>
            </label>
            <label class="radio">
              <input type="radio" value="Finished" v-model="form.status" />
              <span>Finished</span>
            </label>
          </div>
        </div>
      </div>
 
      <div v-if="!updateStatus" class="actions" style="gap: 0.5rem">
        <button type="submit">Submit</button>
        <button class="secondary" type="button" @click="clearForm">Clear</button>
      </div>

      <div v-if="updateStatus" class="actions" style="gap: 0.5rem">
        <button @click="updateData" type="button">Update</button>
        <button class="secondary" type="button" @click="clearForm">Clear</button>
      </div>

    </form>
 
    <h3>Saved Entries ({{ entries.length }})</h3>
 
    <div class="table-wrap" v-if="entries.length">
      <table>
        <thead>
          <tr>
            <th style="width: 35%">Job</th>
            <th style="width: 15%">Start</th>
            <th style="width: 15%">End</th>
            <th style="width: 20%">Status</th>
            <th style="width: 15%">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in entries" :key="row.id">
            <td>{{ row.job }}</td>
            <td>{{ row.startTime }}</td>
            <td>{{ row.endTime }}</td>
            <td>{{ row.status }}</td>
            <td style="display: flex; gap: 0.4rem">
              <button class="danger" type="button" @click="removeRow(row.id)">Remove</button>
            </td>
             <td style="display: flex; gap: 0.4rem">
              <button class="primary" type="button" @click="updateForm(row)">Update</button>
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
 
* {
  box-sizing: border-box;
}
 
.wrap {
  max-width: 960px;
  margin: 2rem auto;
  padding: 0 1rem;
  color: var(--text);
}
h2 {
  margin: 0 0 1rem;
}
h3 {
  margin: 2rem 0 0.75rem;
}
 
.card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);
}
 
.grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.9rem 1rem;
}
.field {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}
.field.full {
  grid-column: 1 / -1;
}
.field > span {
  font-size: 0.9rem;
  color: var(--muted);
}
 
input,
textarea {
  width: 100%;
  padding: 0.6rem 0.7rem;
  border: 1px solid var(--border);
  border-radius: 10px;
  outline: none;
  background: var(--bg);
  font: inherit;
}
input:focus,
textarea:focus {
  border-color: #cbd5e1;
  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.12);
  background: #fff;
}
 
.radios {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  width: 100%;
}
 
.radio {
  display: inline-flex !important;
  align-items: center;
  gap: 0.5rem;
  justify-content: flex-start !important;
  width: fit-content; /* prevents stretching beyond the card */
  max-width: 100%; /* never overflow card */
}
 
.radio > span {
  white-space: nowrap;
}
 
.radio,
.radios label {
  margin: 0;
  padding: 0;
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
button:hover {
  filter: brightness(0.98);
}
button.secondary {
  background: transparent;
  color: var(--primary);
  border-color: var(--border);
}
button.danger {
  background: var(--danger);
  border-color: var(--danger);
}
 
.table-wrap {
  overflow-x: auto;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 14px;
  box-shadow: 0 2px 10px rgba(37, 99, 235, 0.05);
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
 
 