<script setup>
import { reactive, watch, toRaw,ref} from 'vue'

const fruitsBucket=ref(['apple','orange','mango','lemon','berry'])
const myBucket=ref([])
const name=ref('')
watch(
  name,
  (newVal, _oldVal) => {
  
     console.log(_oldVal.includes(newVal))
  },
  { deep: true }
)
function removeFruit(fruit){
   myBucket.value.push(fruit)
   const idx = fruitsBucket.value.indexOf(fruit)
   if (idx !== -1) fruitsBucket.value.splice(idx, 1)
}
</script>
 
<template>
<section class="card">
    <input v-model.trim="name" type="text" placeholder="Enter a no duplicate word !" />
    <h2>Fruits</h2>
    <p class="hint">Tick to remove the fruit from the list.</p>

    <ul class="list">
      <li v-for="fruit in fruitsBucket" :key="fruit" class="row">
        <label class="item">
          <!-- no v-model needed: we remove on change -->
          <input type="checkbox" @change="removeFruit(fruit)" />
          <span>{{ fruit }}</span>
        </label>
      </li>
      <li v-if="fruitsBucket.length === 0" class="empty">No fruits left 🍋</li>
    </ul>

<p class="hint">Tick to remove the fruit from My Buy List.</p>
     <ul class="list">
      <li v-for="fruit in myBucket" :key="fruit" class="row">
        <label class="item">
       
          <input type="checkbox" @change="removeFruit(fruit)" />
          <span>{{ fruit }}</span>
        </label>
      </li>
      <li v-if="myBucket.length === 0" class="empty">No Item Buy in my bucket 🍋</li>
    </ul>
  </section>

</template>
 
<style scoped>

</style>