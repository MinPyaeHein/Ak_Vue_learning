<script setup lang="ts">
import { ref, computed } from 'vue'

 
const sub1 = ref(0)
const sub2 = ref(0)
const sub3 = ref(0)
 

const average = computed(() => {
    const a = Number(sub1.value || 0)
    const b = Number(sub2.value || 0)
    const c = Number(sub3.value || 0)
    return (a + b + c) / 3
})

 
</script>
 
<template>

 
    <div class="row">
        <label for="sub1">Subject 1</label>
        <input id="sub1" type="number" v-model="sub1" />
    </div>
 
    <div class="row">
        <label for="sub2">Subject 2</label>
        <input id="sub2" type="number" v-model="sub2" />
    </div>
 
    <div class="row">
        <label for="sub3">Subject 3</label>
        <input id="sub3" type="number" v-model="sub3" />
    </div>
 
    <div class="row">
        <label for="avg">Average</label>
        <input id="avg" type="text" :value="average.toFixed(2)" readonly />
    </div>
 
    <div id="app">
        <span class="status-label">Pass/Fail Status</span>
        <span id="fail" v-if="sub1 < 50 || sub2 < 50 || sub3 < 50" class="status fail">
            Fail
        </span>
        <span id="pass" v-else class="status pass">
            Pass
        </span>
    </div>
 
 
</template>
 
<style scoped>
 
#app {
    display: flex;
}
 
.status {
    display: inline-block;
    margin-left: 12px;
    padding: 4px 8px;
    border: 1px solid black;
    font-weight: bold;
}
 
#fail {
    background-color: red;
}
 
#pass {
    background-color: lightgreen;
}
 
.row {
    display: flex;
    align-items: center;
    gap: 8px;
}
 
input[type="number"] {
    width: 140px;
}
</style>