function convertMonth(monthNumber) {
  switch (monthNumber) {
    case 0:
      return 'January';
    case 1:
      return 'February';
    case 2:
      return 'March';
    case 3:
      return 'April';
    case 4:
      return 'May';
    case 5:
      return 'June';
    case 6:
      return 'July';
    case 7:
      return 'August';
    case 8:
      return 'September';
    case 9:
      return 'October';
    case 10:
      return 'November';
    case 11:
      return 'December';
    default:
      return null;
  }
}

function convertWeekday(dayNumber) {
  switch (dayNumber) {
    case 0:
      return 'Sunday';
    case 1:
      return 'Monday';
    case 2:
      return 'Tuesday';
    case 3:
      return 'Wednesday';
    case 4:
      return 'Thursday';
    case 5:
      return 'Friday';
    case 6:
      return 'Saturday';
    default:
      return null;
  }
}

function doubleDigits(hourOrMinute) {
  const formattedTime = hourOrMinute < 10 ? `0${hourOrMinute}` : hourOrMinute;
  return formattedTime;
}

function getLocalDateAndTime(utcUnixTime, timezoneOffset) {
  const localMilliseconds = (utcUnixTime + timezoneOffset) * 1000;
  const rawDateAndTime = new Date(localMilliseconds);

  const day = convertWeekday(rawDateAndTime.getUTCDay());
  const month = convertMonth(rawDateAndTime.getUTCMonth());
  const date = rawDateAndTime.getUTCDate();
  const hour = rawDateAndTime.getUTCHours();
  const minute = rawDateAndTime.getUTCMinutes();
  const fullDate = `${day}, ${month} ${date}`;
  const fullTime = `${doubleDigits(hour)}:${doubleDigits(minute)}`;
  const fullDateAndTime = `${day}, ${month} ${date} ${fullTime}`;

  return {
    day,
    month,
    date,
    hour,
    minute,
    fullDate,
    fullTime,
    fullDateAndTime,
    timezoneOffset, // needed for updating clock
  };
}

export default getLocalDateAndTime;
