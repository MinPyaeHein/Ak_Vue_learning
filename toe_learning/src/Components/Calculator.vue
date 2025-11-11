<script setup lang="ts">
import { ref } from 'vue'
const num1=ref(0)
const num2=ref(0)
const result=ref(0)
function add(){
 result.value=num1.value+ num2.value
}
function sub(){
 result.value=num1.value- num2.value
}
function mul(){
 result.value=num1.value* num2.value
}
function div(){
 result.value=num1.value / num2.value
}
</script>

<template>
 <main class="card" aria-label="Calculator">
    <h2 class="title">Calculator</h2>

    <div class="grid">
      <label for="num2">Num 2</label>
      <input v-model.number="num1" type="number" placeholder="Enter number" />

      <label for="num1">Num 1</label>
      <input v-model.number="num2" type="number" placeholder="Enter number" />

      <label for="result">Result</label>
      <input v-model.number="result" type="text" readonly />

      <div class="buttons">
        <button @click="add"  type="button">add</button>
        <button @click="sub"  type="button">Sub</button>
        <button @click="mul" type="button">Mul</button>
        <button @click="div"  type="button">div</button>
      </div>
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
      width: min(520px, 92vw);
      background: var(--bg);
      border: 2px solid var(--border);
      border-radius: 12px;
      padding: 28px 28px 32px;
      box-shadow: 0 8px 30px rgba(0,0,0,.06);
    }
    .title {
      margin: 0 0 18px; font-weight: 700; letter-spacing: .4px;
    }
    .grid {
      display: grid;
      grid-template-columns: 1fr 1.2fr;
      gap: 14px 22px;
      align-items: center;
    }
    label { font-weight: 600; }
    input[type="number"], input[readonly] {
      width: 100%;
      padding: 10px 12px;
      border: 2px solid var(--border);
      border-radius: 8px;
      font-size: 16px;
      background: #fff;
    }
    input[readonly] { background: #f1f5f9; }
    .buttons {
      grid-column: 1 / -1;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 14px 22px;
      margin-top: 8px;
    }
    button {
      display: inline-block;
      padding: 10px 14px;
      border: 2px solid var(--border);
      background: #fff;
      border-radius: 10px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: transform .02s ease, box-shadow .15s ease;
    }
    button:hover { box-shadow: 0 4px 14px rgba(0,0,0,.08); }
    button:active { transform: translateY(1px); }
    @media (max-width: 420px) {
      .grid { grid-template-columns: 1fr; }
      .buttons { grid-template-columns: 1fr 1fr; }
    }
</style>
