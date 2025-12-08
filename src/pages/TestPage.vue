<template>
  <!-- Pass data as props -->
  <ChildCompoents
    :user="user"
    :age="age"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ChildCompoents from '@/components/ChildCompoents.vue';

const user = ref('Minn')
const age = ref(25)
</script>
