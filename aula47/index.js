const date = new Date("2003-07-14 00:00:00");
const weekDay = date.getDay();
let weekDayText;

function getDayOfWeek(weekDay) {
  switch (weekDay) {
    case 0:
      weekDayText = "Sunday";
      return weekDayText;
    case 1:
      weekDayText = "Monday";
      return weekDayText;
    case 2:
      weekDayText = "Tuersday";
      return weekDayText;
    case 3:
      weekDayText = "Wednesday";
      return weekDayText;
    case 4:
      weekDayText = "Thursday";
      return weekDayText;
    case 5:
      weekDayText = "Friday";
      return weekDayText;
    case 6:
      weekDayText = "Saturday";
      return weekDayText;
    default:
      break;
  }
}

weekDayText = getDayOfWeek(weekDay);
console.log(weekDayText);
