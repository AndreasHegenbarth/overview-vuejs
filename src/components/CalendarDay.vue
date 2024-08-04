<template>
  <div class="col-12 md:col-6 lg:col-2">
    <div class="surface-card shadow-2 p-3 border-round" :class="cardClasses">
      <div class="flex justify-content-between mb-3" :class="cardHeaderClasses">
        <div>
          <span class="block text-500 font-medium mb-3" role="button">{{ day.fullName }}</span>
        </div>
      </div>
      <div class="card-body">
        <div id="calendar-day">
          <CalendarEvent v-for="event in day.events" :key="event.title" :event="event">
            <template v-slot:eventPriority="{ priorityDisplayName }">{{
              priorityDisplayName
            }}</template>
            <template v-slot="{ event }">{{ event.title }}</template>
          </CalendarEvent>
        </div>
        <!-- Ende: Template für die Calendar-Day-Component -->
      </div>
      <span class="text-green-500 font-medium">24 new </span>
      <span class="text-500">since last visit</span>
    </div>
  </div>
</template>

<script>
import CalendarEvent from './CalendarEvent.vue'
import Store from '../store'

export default {
  name: 'CalendarDay',
  components: {
    CalendarEvent
  },
  props: {
    day: {
      typeof: Object,
      required: true,
      default: () => {
        return {
          id: -1,
          fullName: 'Fehlender Wochentag',
          events: [],
          active: false
        }
      },
      validator: (value) => {
        if (Object.keys(value).includes('id')) return true
      }
    }
  },
  computed: {
    cardClasses() {
      return this.day.id === Store.getters.activeDay().id ? ['border-2'] : null
    },
    cardHeaderClasses() {
      return this.day.id === Store.getters.activeDay().id
        ? ['calendar-day--active', 'text-white']
        : null
    }
  }
}
</script>

<style scoped>
.calendar-day--active {
  background-color: #4c7faf;
}
</style>