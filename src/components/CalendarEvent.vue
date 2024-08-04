<template>
  <div id="calendar-event">
    <div class="alert text-center" :class="priorityColor">
      <div>
        <slot name="eventPriority" :priorityDisplayName="priorityDisplayName">
          <strong>{{ priorityDisplayName }}</strong>
        </slot>
      </div>

      <div class="text-900 font-medium text-xl">
        <slot :event="event">{{ event.title }} </slot>
      </div>
      <div>
        <b class="pi pi-pencil p-mr-2" role="button">🗑</b>
        <b class="pi pi-trash" role="button">✎</b>
      </div>
    </div>
    <div
      class="flex align-items-center justify-content-center bg-blue-100 border-round"
      style="width: 2.5rem; height: 2.5rem"
    >
      <i class="pi pi-shopping-cart text-blue-500 text-xl"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalendarEvent',
  props: {
    event: {
      type: Object
    }
  },
  computed: {
    priorityDisplayName() {
      switch (this.event.priority) {
        case 1:
          return 'Low'
        case 0:
          return 'Middle'
        case -1:
          return 'High'
      }

      return 'Normal'
    },
    priorityColor() {
      switch (this.event.priority) {
        case 1:
          return 'priority--green'
        case 0:
          return 'priority--orange'
        case -1:
          return 'priority--red'
      }
    }
  }
}
</script>

<style scope>
.priority--green {
  background: #d1e7dd;
}

.priority--orange {
  background: #fff3dc;
}

.priority--red {
  background: #f8d7da;
}
</style>