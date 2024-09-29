<template>
  <div class="font-bold underline inline">
    <span @click="hnadleSum">Click</span>
    <span>{{ sum }}</span>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import useAdd from './hooks/sum'

defineOptions({ name: 'PageHome' })
const a = ref(1)
const b = ref(2)

const [sum, add] = useAdd(a, b)

const hnadleSum = () => {
  add(3, 5)
}
</script>
