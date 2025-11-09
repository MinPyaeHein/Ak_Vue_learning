<script setup lang="ts">
import { ref } from 'vue'
 
// reactive value for the number input
const number1 = ref(0)
const number2 = ref(0)
const result = ref(0)
 
 
function add(){
    result.value = number1.value + number2.value
}
function sub(){
    result.value = number1.value - number2.value
}
function mul(){
    result.value = number1.value * number2.value
}
function div(){
    result.value = number1.value / number2.value
}
 
</script>
 
<template>
    <div class="row">
        <label for="num1">Number 1</label>
        <input id="num1" type="number" v-model="number1" />
    </div>
 
    <div class="row">
        <label for="num2">Number 2</label>
        <input id="num2" type="number" v-model="number2" />
    </div>
 
    <div class="row">
        <label for="num3">Result</label>
        <input id="num3" type="number" v-model="result" />
    </div>
    <button v-on:click="add"> + </button>
    <button v-on:click="sub"> - </button>
    <button v-on:click="mul"> * </button>
    <button v-on:click="div"> / </button>
 
    <hr/>

 
 
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