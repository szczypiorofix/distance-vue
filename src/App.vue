<template>
  <div id="app">
    <h1>Oblicz odległość między punktami</h1>
    <DistanceForm @calculate="handleCalculate" />
    <DistanceResult v-if="result" :result="result" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DistanceForm from './components/DistanceForm.vue'
import DistanceResult from './components/DistanceResult.vue'
import { calculateDistance } from './utils/distance'
import type { Point } from '@/models/Point.ts'
import type { DistanceInMetersAndKilometers } from '@/models/Distance.ts'

export default defineComponent({
  name: 'App',
  components: {
    DistanceForm,
    DistanceResult,
  },
  data() {
    return {
      result: null as DistanceInMetersAndKilometers | null,
    }
  },
  methods: {
    handleCalculate({ point1, point2 }: { point1: Point; point2: Point }) {
      // const { lat: lat1, lon: lon1 } = point1
      // const { lat: lat2, lon: lon2 } = point2
      this.result = calculateDistance(point1, point2)
    },
  },
})
</script>

<style>
#app {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}
</style>
