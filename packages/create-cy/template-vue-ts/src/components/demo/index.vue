<template>
  <div class="demo">{{ count }} - {{ msg }}</div>
</template>

<script lang="ts" setup>
defineOptions({ name: 'ComponentDemo' })

const { count = 0, msg = 'hello' } = defineProps<{
  count?: number
  msg?: string
}>()
</script>
