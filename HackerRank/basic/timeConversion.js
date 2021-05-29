// Given a time in -hour AM/PM format, convert it to military (24-hour) time.
// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock

function timeConversion(s) {
  let timeArray = s.split(':');
  let formatTime = timeArray[2].substr(2);
  let timeSplit = '';
  console.log('time original', s);

  console.log(timeArray);
  if (formatTime.toUpperCase() === 'PM') {
    if (timeArray[0] == 12) {
      timeSplit = timeArray[0];
    } else {
      timeSplit = (parseInt(timeArray[0]) + 12).toString();
    }
  } else {
    if (timeArray[0] == 12) {
      timeSplit = '00';
    } else {
      timeSplit = timeArray[0];
    }
    //console.log(s.substr(0, s.length - 2));
  }
  console.log(timeSplit + s.substr(2, s.length - 4));
} // Write your code here

const arrayHours = [
  '12:01:00PM',
  '06:15:25AM',
  '08:45:24PM',
  '11:28:25AM',
  '12:40:22AM',
  '12:45:54PM',
];

arrayHours.forEach((item) => timeConversion(item));
