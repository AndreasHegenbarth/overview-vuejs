import { calendarWeekData } from './storage/seed-calendar'
import { reactive, readonly } from 'vue'

const state = reactive({
  calendarWeekData
})

const getters = {
  activeDay: () => state.calendarWeekData.find((day) => day.active)
}

const mutations = {}

export default {
  state: readonly(state),
  getters,
  mutations
}
