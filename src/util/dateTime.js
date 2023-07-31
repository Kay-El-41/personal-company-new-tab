const todayTime = new Date()
const yesterdayTime = new Date(todayTime)
yesterdayTime.setDate(yesterdayTime.getDate() - 1)

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]
const days = ['Sun', 'Mon', 'Tue', 'Web', 'Thurs', 'Fri', 'Sat']

export const todayDate = `${todayTime.getDate()} ${
  months[todayTime.getMonth()]
} ${todayTime.getFullYear()} (${days[todayTime.getDay()]})`

export const yesterdayDate = ` ${yesterdayTime.getDate()} ${
  months[todayTime.getMonth()]
} ${todayTime.getFullYear()} (${days[yesterdayTime.getDay()]})`
