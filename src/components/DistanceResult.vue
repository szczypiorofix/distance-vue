<template>
  <div class="result">
    <h2>Wynik</h2>
    <p>Odległość: {{ result.meters }} metrów</p>
    <p>Odległość: {{ result.kilometers }} kilometrów</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { DistanceInMetersAndKilometers } from '@/models/Distance.ts'

export default defineComponent({
  name: 'DistanceResult',
  props: {
    result: {
      type: Object as () => DistanceInMetersAndKilometers,
      required: true,
    },
  },
})
</script>

<style scoped>
.result {
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
