<template>
  <h1>CalendarWeek</h1>
  <div class="surface-ground px-4 py-5 md:px-6 lg:px-8" id="calender-week">
    <div class="grid">
      <CalendarDay :day="day" v-for="day in calendarWeekData" :key="day.id" />
    </div>
  </div>
</template>

<script>
import CalendarDay from './CalendarDay.vue'
import Store from '../store'

export default {
  name: 'CalendarWeek',
  components: {
    CalendarDay
  },
  data() {
    return {
      calendarWeekData: Store.state.calendarWeekData
    }
  }
}
</script>

<style scoped>
</style>

