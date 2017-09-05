import moment from 'moment'

const jsDays = {
  javazone_2015 : { day1: '2015-09-09', day2: '2015-09-10' },
  javazone_2016 : { day1: '2016-09-07', day2: '2016-09-08' },
  javazone_2017 : { day1: '2017-09-13', day2: '2017-09-14' }
}

// this functions should be replaced by call to API
export function getDays(slug) {
  return jsDays[slug] || { day1: null, day2: null }
}

export function getSelectedDay(day1, day2) {
  return (moment().isBefore(day2)) ? day1 : day2
}

export function getSelectedDayBySlug(slug) {
  const days = getDays(slug)
  return (moment().isBefore(days.day2)) ? days.day1 : days.day2
}

export function createUUID() {
  var s = []
  var hexDigits = "0123456789abcdef"
  for (var i = 0; i < 36; i++) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
  }
  s[14] = "4"
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1)
  s[8] = s[13] = s[18] = s[23] = "-"

  const uuid = s.join("")
  return uuid
}