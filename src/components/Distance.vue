<template>
  <form @submit.prevent="submitForm">
    <h2>Punkt 1</h2>
    <div>
      <label>Szerokość geograficzna (lat):</label>
      <input
        v-model.number="point1.lat"
        type="number"
        step="any"
        required
        placeholder="np. 52.2297"
      />
    </div>
    <div>
      <label>Długość geograficzna (lon):</label>
      <input
        v-model.number="point1.lon"
        type="number"
        step="any"
        required
        placeholder="np. 21.0122"
      />
    </div>

    <h2>Punkt 2</h2>
    <div>
      <label>Szerokość geograficzna (lat):</label>
      <input
        v-model.number="point2.lat"
        type="number"
        step="any"
        required
        placeholder="np. 50.0647"
      />
    </div>
    <div>
      <label>Długość geograficzna (lon):</label>
      <input
        v-model.number="point2.lon"
        type="number"
        step="any"
        required
        placeholder="np. 19.9450"
      />
    </div>

    <button type="submit">Oblicz odległość</button>
  </form>
</template>

<script lang="ts">
export default {
  name: 'DistanceForm',
  data() {
    return {
      point1: { lat: 0, lon: 0 },
      point2: { lat: 0, lon: 0 },
    }
  },
  methods: {
    submitForm() {
      if (
        this.validateCoords(this.point1.lat, this.point1.lon) &&
        this.validateCoords(this.point2.lat, this.point2.lon)
      ) {
        this.$emit('calculate', { point1: this.point1, point2: this.point2 })
      } else {
        alert('Wprowadź poprawne współrzędne (lat: -90 do 90, lon: -180 do 180)')
      }
    },
    validateCoords(lat: number, lon: number) {
      return lat >= -90 && lat <= 90 && lon >= -180 && lon <= 180
    },
  },
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
div {
  margin-bottom: 10px;
}
label {
  margin-right: 10px;
}
button {
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
</style>
