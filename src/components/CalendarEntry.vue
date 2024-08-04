<template>
  <div id="calender-entry">
    <div class="card">
      <div class="card-header p-text-center">
        <h5>Neuer Termin für: <strong>Montag</strong></h5>
      </div>
      <div class="card-body">
        <InputText type="text" class="inputtext component" placeholder="Neuer Eintrag" />

        <div class="card flex justify-center">
          <Select
            v-model="selectedPriority"
            :options="priorities"
            optionLabel="name"
            placeholder="Select a Priority"
            class="w-full md:w-56"
          />
        </div>

        <div class="p-text-center mt-3">
          <span
            v-for="i in 5"
            :key="i"
            class="alert alert-primary d-inline-block m-0 mr-2 square"
            role="button"
          >
          </span>
        </div>
        <hr />
        <div class="d-grid gap-2">
          <Button label="Eintragen" class="p-button-primary" />
          <Button label="Inhalt löschen" class="p-button-danger" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'CalendarEntry'
}

const selectedPriority = ref()
const priorities = ref([
  { name: 'Hoch', code: '-1' },
  { name: 'Mittel', code: '0' },
  { name: 'Tief', code: '1' }
])
</script>

<style scope>
</style>