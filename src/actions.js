export const changeLocation = (location) => {
  return {
    type: 'CHANGE_LOCATION',
    location: location
  };
}

export const setData = (data) => {
  return {
    type: 'SET_DATA',
    data: data
  };
}

export const setDates = (dates) => {
  return {
    type: 'SET_DATES',
    dates: dates
  };
}

export const setTemps = (temps) => {
  return {
    type: 'SET_TEMPS',
    temps: temps
  };
}

export const setSelectedDate = (date) => {
  return {
    type: 'SET_SELECTED_DATE',
    date: date
  };
}

export const setSelectedTemp = (temp) => {
  return {
    type: 'SET_SELECTED_TEMP',
    temp: temp
  };
}

