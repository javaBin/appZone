import moment from 'moment';


// this functions should be replaced by call to API
export function getDays(slug) {
  let days = {
    day1: null,
    day2: null,
  };

  switch(slug) {
    case 'javazone_2015':
      return {day1: '2015-09-09', day2: '2015-09-10'}
    case 'javazone_2016':
      return {day1: '2016-09-07', day2: '2016-09-08'}
    case 'javazone_2017':
      return {day1: '2017-09-13', day2: '2017-09-14'}
    default: {
      return days;
    }
  } 
}

export function getSelectedDay(day1, day2) {
  return (moment().isBefore(day2)) ? day1 : day2;
}

export function getSelectedDayBySlug(slug) {
  const days = getDays(slug);
  return (moment().isBefore(days.day2)) ? days.day1 : days.day2;
}
