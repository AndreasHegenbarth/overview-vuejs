<template>
  <div class="p-fluid mt-5">
    <div class="p-grid">
      <div class="p-col-12">
        <CalendarWeek />
      </div>
    </div>
    <div class="grid mt-3">
      <div class="col-4 offset-4">
        <CalendarEntry />
      </div>
      <div class="p-col-2 p-offset-2">
        <div class="p-float-end">
          <Button class="p-button-lg mb-2">
            <i class="pi pi-cog">Settings</i>
          </Button>
        </div>
        <CalendarSettings />
      </div>
    </div>
  </div>
</template>



<script>
import CalendarWeek from '../components/CalendarWeek.vue'
import CalendarEntry from '../components/CalendarEntry.vue'
import CalendarSettings from '../components/CalendarSettings.vue'

export default {
  name: 'Calendar',
  components: {
    CalendarWeek,
    CalendarEntry,
    CalendarSettings
  }
}
</script>

<style>
.square {
  width: 40px;
  height: 40px;
  background-color: aquamarine;
  display: inline-block;
}
</style>