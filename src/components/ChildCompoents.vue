<template>
  <div>
    <p>User: {{ user }}</p>
    <p>Age: {{ age }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  user: string
  age: number
}>()
</script>
