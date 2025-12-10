<template>
  <div>
    <p>User: {{ user }}</p>
    <p>Age: {{ age }}</p>

    <table border="1" cellpadding="8">
      <thead>
        <tr>
          <th v-for="col in columns" :key="col.key">{{ col.label }}</th>
        
        </tr>
      </thead>

      <tbody>
        <tr v-for="row in rows" :key="row[idKey]">
          <td v-for="col in columns" :key="col.key">{{ row[col.key] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
  type Column={
    key: string
    label: string
  }

const props = defineProps<{
  user: string
  age: number
  rows: Record<string,any>[]
  columns: Column[]
  idKey: string
}>()
</script>

