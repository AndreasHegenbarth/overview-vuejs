export const calendarWeekData = [
  {
    id: 1,
    shortName: 'Mo',
    fullName: 'Montag',
    events: [
      { title: 'First Event', edit: false, color: 'success', priority: 0 },
      { title: 'Second Event', edit: false, color: 'info', priority: 1 }
    ],
    active: false
  },
  {
    id: 2,
    shortName: 'Di',
    fullName: 'Dienstag',
    events: [],
    active: false
  },
  {
    id: 3,
    shortName: 'Mi',
    fullName: 'Mittwoch',
    events: [],
    active: false
  },
  {
    id: 4,
    shortName: 'Do',
    fullName: 'Donnerstag',
    events: [
      {
        title: 'Third Event',
        edit: false,
        color: 'warning',
        priority: -1
      }
    ],
    active: true
  },
  {
    id: 5,
    shortName: 'Fr',
    fullName: 'Freitag',
    events: [],
    active: false
  },
  {
    id: 6,
    shortName: 'Sa',
    fullName: 'Samstag',
    events: [],
    active: false
  },
  {
    id: 7,
    shortName: 'So',
    fullName: 'Sonntag',
    events: [{ title: 'Fourth Event', edit: false, color: 'primary', priority: -1 }],
    active: false
  }
]
