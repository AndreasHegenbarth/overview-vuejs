<template>
  <div id="calendar-settings">
    <div class="surface-card p-4 shadow-2 border-round card-success border-dashed surface-border">
      <div class="text-3xl font-medium text-900 mb-3"><strong>Einstellungen</strong></div>
      <div class="font-medium text-500 mb-3">
        <ul class="nav nav-pills nav-fill">
          <li v-for="i in 2" :key="i" class="nav-item" role="button">
            <a class="nav-link"><i class="pi pi-icons text-success">A</i></a>
          </li>
        </ul>
        <hr />
        <ul class="nav nav-pills nav-fill">
          <li class="nav-item" role="button">
            <a class="nav-link"><i class="pi pi-sort-amount-down-alt text-success">B</i></a>
          </li>
          <li class="nav-item" role="button">
            <a class="nav-link"><i class="pi pi-sort-alpha-down text-success">C</i></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalendarSettings'
}
</script>

<style scoped>
</style>