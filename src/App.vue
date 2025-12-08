<!-- App.vue -->
<script setup>
import BaseLayout from '@/components/Layout.vue'
import MenuBar from './components/MenuBar.vue';
</script>

<template>
  <BaseLayout>
    <template #header>
      <MenuBar></MenuBar>
    </template>
      <template #page>
          <RouterView />
      </template>
    <template #footer>
      <p>© 2025 My App</p>
    </template>

  </BaseLayout>
</template>
